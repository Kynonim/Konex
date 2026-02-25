import { createSignal, onCleanup, onMount } from "solid-js";
import { AppLayout, Header, Main } from "../components/Content";
import { A } from "@solidjs/router";
import { IconChat, IconCreate, IconHome, IconNotify, IconSearch } from "../components/Icons";

export function CorePage() {
  const [lastScrollY, setLastScrollY] = createSignal(0);
  const [showNavbar, setShowNavbar] = createSignal(true);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY()) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY);
  };

  onMount(() => window.addEventListener("scroll", controlNavbar));
  onCleanup(() => window.removeEventListener("scroll", controlNavbar));

  return (
    <AppLayout navigateOff>
      <Header isScroll={showNavbar()} />
      <Main isThisUser={false} />
      <nav class={`fixed bottom-6 left-1/2 z-40 -translate-x-1/2 bg-gray-900/50 backdrop-blur-xl border border-gray-600/50 rounded-full shadow-2xl shadow-black/50 px-6 py-3 transition-all duration-300 ${showNavbar() ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"}`}>
        <div class="flex items-center justify-center gap-8 relative">
          <A href="/" class="text-gray-300 hover:text-white transition-colors"><IconHome /></A>
          <A href="/search" class="text-gray-300 hover:text-white transition-colors"><IconSearch /></A>
          <A href="/create" class="text-gray-300 hover:text-white bg-rose-600 rounded-full p-2 shadow-lg shadow-rose-600/50 hover:bg-rose-500 transition-all hover:scale-110 active:scale-95"><IconCreate /></A>
          <A href="/notify" class="text-gray-300 hover:text-white transition-colors"><IconNotify /></A>
          <A href="/chats" class="text-gray-300 hover:text-white transition-colors"><IconChat /></A>
        </div>
      </nav>
    </AppLayout>
  );
}