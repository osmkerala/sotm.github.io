import type { APIRoute } from "astro";

export const GET: APIRoute = ({ redirect }) => {
  return redirect(
    "https://wiki.openstreetmap.org/wiki/State_of_the_Map_Kerala_2025",
    307,
  );
};
