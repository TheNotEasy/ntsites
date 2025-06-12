import Button from "~/components/button"
import logo from "./logo.svg"
import { Link } from "react-router"
import { TelegramLogoIcon } from "@phosphor-icons/react"

export default function Landing() {
  return (
    <div className="flex flex-col gap-15 mb-20 mt-5 text-center">
      <div className="container flex flex-col gap-9">
        <img src={logo} alt="" className="w-[120px] aspect-square mx-auto bg-stone-400 rounded-full p-6" />
        <div className="flex flex-col items-center gap-10">
          <h1 className="text-4xl font-bold">ntSites</h1>
          <div className="flex flex-col gap-2">
            <p className="text-2xl">Создаю сайты “под ключ”</p>
            <p className="text-lg text-stone-400">От идеи до запуска – быстро и без лишних сложностей</p>
          </div>
        </div>
      </div>
      <Link to="https://t.me/thenoteasy">
        <Button className="mx-auto bg-blue-500 hover:bg-blue-400">
          <TelegramLogoIcon className="h-full" />
          <span>Связаться со мной</span>
        </Button>
      </Link>
      <div className="container flex flex-col items-center gap-5">
        <p className="text-2xl">Пример моей работы (можно скроллить)</p>
        <Link className="text-stone-200" to="https://thenoteasy.github.io/sigma-demo-project" target="_blank">thenoteasy.github.io/sigma-demo-project</Link>
        <iframe tabIndex={0} src="https://thenoteasy.github.io/sigma-demo-project" className="w-full h-200 rounded-2xl"></iframe>
        <p className="text-sm text-stone-400">Обратите внимание, что Сигма - ненастоящая фирма. Цель работы - показать мои умения</p>
      </div>
    </div>
  )
}