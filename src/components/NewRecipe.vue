<script setup lang="ts">
  import { ref, watchEffect } from 'vue';
  import { useRouter } from 'vue-router';

  const router = useRouter();

  interface Step {
    order: number;
    description: string;
  }

  const title = ref('');
  const description = ref('');
  const imageUrl = ref('');
  const recipeSteps = ref<Step[]>([
    { order: 0, description: ''}
  ]);

  const errorMessage = ref('');

  const validateForm = () => {
    if (!title.value) {
      errorMessage.value = 'Title is required';
      return false;
    }

    if (title.value.length < 6) {
      errorMessage.value = 'Title cannot be shorter than 6 characters';
      return false;
    }

    if (!description.value) {
      errorMessage.value = 'Description is required';
      return false;
    }

    if (description.value.length < 20) {
      errorMessage.value = 'Description cannot be shorter than 20 characters';
      return false;
    }

    if (!imageUrl.value) {
      errorMessage.value = 'Image URL is required';
      return false;
    }

    const urlRegExp = new RegExp(/[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)?/gi);

    if (!urlRegExp.test(imageUrl.value)) {
      errorMessage.value = 'Image URL should be a valid link';
      return false;
    }

    errorMessage.value = '';
    return true;
  };

  const submitForm = () => {
    const isValid = validateForm();

    if (isValid) {
      router.push('/');
    };
  };

  const handleAddRecipe = () => recipeSteps.value.push({ order: recipeSteps.value.length, description: '' });
  const handleRemoveRecipe = () => recipeSteps.value.pop();
</script>

<template>
  <div class="new_recipe_pane">
    <h2>Create new recipe</h2>
    <form>
      <div class="new_recipe_pane__section">
        <label for="title">Title</label>
        <input id="title" type="text" v-model.trim="title">
      </div>
      <div class="new_recipe_pane__section">
        <label for="description">Description</label>
        <textarea id="description" v-model.trim="description" />
      </div>
      <div class="new_recipe_pane__section">
        <label for="image">Image URL</label>
        <input id="image" type="text" v-model.trim="imageUrl">
      </div>
      <p>Preparation steps</p>
      <div class="new_recipe_pane__section" v-for="(step, index) in recipeSteps" :key="step.order">
        <label :for="`step_${index}`">{{ `Step ${index + 1}` }}</label>
        <textarea :id="`step_${index}`" type="text" v-model="recipeSteps[index].description" />
      </div>
      <div class="new_recipe_pane__buttons_container">
        <button type="button" class="btn" @click.prevent="handleAddRecipe">Add Step</button>
        <button v-if="recipeSteps?.length > 1" class="btn btn_dark" @click.prevent="handleRemoveRecipe">Remove Step</button>
      </div>

      <p v-if="errorMessage" class="error_message">{{ errorMessage }}</p>
      <button type="submit" class="btn new_recipe_pane__btn_submit" @click.prevent="submitForm">Create</button>
    </form>
  </div>
</template>

<style scoped>
  .new_recipe_pane {
    z-index: 900;
    position: fixed;
    background: #FFFFFF;
    top: 0;
    right: 0;
    height: 100%;
    width: 520px;
    padding: 20px;
    overflow-y: scroll;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding-top: 56px;
  }
  .new_recipe_pane h2 {
    margin-bottom: 12px;
    font-weight: bold;
  }
  .new_recipe_pane form {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .new_recipe_pane__section {
    display: flex;
    flex-direction: column;
  }
  .new_recipe_pane__buttons_container {
    display: flex;
    gap: 12px;
  }
  .new_recipe_pane__btn_submit {
    padding: 12px;
    margin-top: 20px;
  }
  .error_message {
    color: red;
  }

  .new_recipe_pane input,
  .new_recipe_pane textarea {
    border: 1px solid #42b883;
    border-radius: 4px;
    min-height: 32px;
    padding: 6px;
    font-size: 14px;
  }
</style>