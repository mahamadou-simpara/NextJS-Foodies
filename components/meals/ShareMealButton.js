'use client';
import { useFormStatus } from "react-dom";


export default function ShareMealButton({name}) {
  const {pending} = useFormStatus()

  return <button type="submit">{pending ? 'submitting' : name}</button>;
}
