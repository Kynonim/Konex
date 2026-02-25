import { useLocation, useNavigate } from "@solidjs/router";
import { createEffect, createSignal, onMount, ParentProps, Show } from "solid-js";
import { AppLayout } from "./Content";

const [isLogin, setLogin] = createSignal<boolean | null>(null);

function checkIfLogin() {
  setTimeout(() => {
    const token = localStorage.getItem("konex-token");
    setLogin(!!token);
  }, 300);
}

export function CheckAuth(props: ParentProps) {
  const navigate = useNavigate();
  const location = useLocation();

  onMount(() => checkIfLogin());

  createEffect(() => {
    if (isLogin() === false) {
      const to = location.pathname !== "/" ? `?redirect=${encodeURIComponent(location.pathname)}` : "";
      navigate(`/signin${to}`, { replace: true });
    }
  });

  return (
    <Show when={isLogin() === null} fallback={
      <Show when={isLogin()} fallback={
        <AppLayout navigateOff>
          <div class="fixed inset-0 flex items-center justify-center z-50">
            <div class="w-16 h-16 rounded-full border-6 border-gray-600 border-t-rose-500 animate-spin" />
          </div>
        </AppLayout>
      }>
        {props.children}
      </Show>
    }>
      <AppLayout navigateOff>
        <div class="fixed inset-0 flex flex-col justify-center items-center">
          <span class="font-medium text-2xl">Checking Authentication...</span>
          <span class="text-gray-400 mt-2 text-sm">Made with "love" by Riky Ripaldo</span>
        </div>
      </AppLayout>
    </Show>
  );
}