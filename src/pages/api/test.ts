import type { APIRoute } from "astro";
export const prerender = true;




    export const  GET: APIRoute=async ({params})=>{
        let number=Math.random()
  return new Response(
    JSON.stringify({
        number,
      message: `Este es mi endpoint estático`,
    }),
  );
}