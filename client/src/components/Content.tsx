import { A } from "@solidjs/router";
import { IconArrowLeft, IconComment, IconLike, IconSettings, IconShare } from "./Icons";
import { JSX } from "solid-js";

export function Header(props: { isScroll: boolean }) {
  return (
    <header class={`fixed top-1 left-0 right-0 z-30 flex items-center justify-between px-4 transition-all duration-300 ${props.isScroll ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0 pointer-events-none"}`}>
      <div class="flex items-center bg-gray-900/70 backdrop-blur-xl border border-gray-700/50 rounded-full p-1 shadow-xl shadow-black/40">
        <A href="/account/1234" class="block w-11 h-11 rounded-full overflow-hidden hover:scale-105 transition-transform">
          <img src="https://picsum.photos/200/300" alt="Avatar" class="w-full h-full object-cover" />
        </A>
        <h1 class="mx-2 text-2xl font-bold">Konex</h1>
      </div>
      <div class="flex-1"></div>
      <div class="bg-gray-900/70 backdrop-blur-xl border border-gray-700/50 rounded-full p-2 shadow-xl shadow-black/40">
        <A href="/settings" class="block text-gray-300 hover:text-white transition-colors">
          <IconSettings class="w-8 h-8" />
        </A>
      </div>
    </header>
  );
}

export function Main(props: { isThisUser: boolean }) {
  return (
    <main class={`min-h-screen overflow-y-auto scroll-smooth ${props.isThisUser ? "pt-5 pb-10" : "py-16"}`}>
      <div class="space-y-6">
        {Array.from({ length: 10 }).map((_v, i) => (
          <div class="border-t p-4 border-gray-600/80">
            <div class="flex items-center gap-3 mt-3">
              <div class="block w-12 h-12 border rounded-full bg-gray-600 overflow-hidden border-gray-600">
                <img src="https://picsum.photos/200" alt="Avatar" class="w-full h-full object-cover" />
              </div>
              <div>
                <p class="font-medium">User {i + 1}</p>
                <p class="text-sm text-gray-400">@user{i + 1}</p>
              </div>
            </div>
            <p class="mb-3">testing ke {i}</p>
            <div class="flex justify-center bg-gray-800/50 rounded-lg overflow-hidden">
              <img src="https://picsum.photos/200/300" alt="Image" class="w-full"/>
            </div>
            <div class="flex justify-between items-center text-gray-400 pt-3 px-4">
              <button class="flex items-center gap-2 hover:text-rose-400 transition-colors">
                <IconLike />
                <span>128</span>
              </button>
              <button class="flex items-center gap-2 hover:text-rose-400 transition-colors">
                <IconComment />
                <span>40</span>
              </button>
              <button class="flex items-center gap-2 hover:text-rose-400 transition-colors">
                <IconShare />
                <span>Share</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export function AppLayout(props: { navigateOff?: boolean, title?: string, navigate?: string, children: JSX.Element }) {
  return (
    <div class="min-h-screen bg-linear-to-br from-gray-900 via-black to-gray-900 text-white flex flex-col items-center">
      <div class="w-full max-w-[480px] min-h-screen relative">
        <div class={`relative flex items-center top-4 ${props.navigateOff ? "hidden" : ""}`}>
          <A href={props.navigate === undefined ? "" : props.navigate}><IconArrowLeft /></A>
          <h1 class="text-xl font-semibold ml-2">{props.title}</h1>
        </div>
        {props.children}
      </div>
    </div>
  )
}