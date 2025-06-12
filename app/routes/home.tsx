import type { Route } from "./+types/home";
import Landing from "../landing";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ntSites" },
    { name: "description", content: "Создаю сайты “под ключ”" },
  ];
}

export default function Home() {
  return <Landing />;
}
