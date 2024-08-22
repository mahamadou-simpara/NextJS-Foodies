'use server';

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

function isIncorrect(text) {
    return !text.title || text.trim() === ''
}

export async function shareMeal(prevState, formData) {


    const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        image: formData.get('image'),
        creator: formData.get('name'),
        creator_email: formData.get('email')
    }

    if(isIncorrect(meal.title) || 
       isIncorrect(meal.creator) || 
       isIncorrect(meal.creator_email) || 
       isIncorrect(meal.instructions) || 
       isIncorrect(meal.summary) ||
       !meal.creator_email.includes('@') ||
       !meal.image ||
       meal.image.size === 0
    ){
        return {message: 'Inccorect input.'}
    }

    
    await saveMeal(meal);
    revalidatePath('/meals')

    redirect('/meals');

  };
