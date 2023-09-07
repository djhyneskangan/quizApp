import { supabase } from "$lib/supabaseClient.js";
console.log(supabase);

export async function load() {
  const { data } = await supabase
    .from("quizQuestions")
    .select();
  return {
    questions: data ?? [],
  };
}