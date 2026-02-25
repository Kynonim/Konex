import { A, useNavigate } from "@solidjs/router";
import { createSignal, Show } from "solid-js";
import { IconEyeClose, IconEyeOpen } from "../components/Icons";

export function SigninPage() {
  const navigate = useNavigate();

  const [email, setEmail] = createSignal("");
  const [password, setPassword] = createSignal("");
  const [error, setError] = createSignal<string | null>(null);
  const [isLoading, setLoading] = createSignal(false);
  const [showPassword, setShowPassword] = createSignal(false);

  const hanldeSubmit = async (e: SubmitEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setLoading(true);
    setError(null);
    try {
      await new Promise(r => setTimeout(r, 500));
      localStorage.setItem("konex-token", "fake-token");
      navigate("/", { replace: true });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Terjadi kesalahan");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div class="min-h-screen bg-linear-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center px-4">
      <div class="w-full max-w-md">
        <div class="bg-gray-800/40 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl shadow-black/50 p-8 space-y-8">
          <div class="text-center">
            <h1 class="text-3xl font-bold text-white tracking-tight">Konex</h1>
            <p class="mt-2 text-gray-400">Simple sosial media</p>
          </div>

          <form class="space-y-6" onSubmit={hanldeSubmit}>
            <div>
              <label for="email" class="block text-sm font-medium text-gray-300">Email</label>
              <input
                id="email"
                type="email"
                value={email()}
                onInput={(e) => setEmail(e.currentTarget.value)}
                placeholder="rikyripaldo@konex.com"
                class="mt-1 block w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-rose-400 transition"
                required
              />
            </div>
            <div class="relative">
              <label for="password" class="block text-sm font-medium text-gray-300">Password</label>
              <input
                id="password"
                type={showPassword() ? "text" : "password"}
                value={password()}
                onInput={(e) => setPassword(e.currentTarget.value)}
                placeholder="admin#1234"
                class="mt-1 block w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-rose-400 transition"
                required
              />
              <button onClick={() => setShowPassword(!showPassword())} type="button" aria-label={showPassword() ? "Sembunyikan password" : "Tampilkan password"} class="absolute inset-y-0 right-0 top-5 flex items-center justify-center px-4 text-gray-400 hover:text-gray-300 focus:outline-none focus:text-rose-400 transition-colors">
                <Show when={showPassword()}>
                  <IconEyeOpen />
                </Show>
                <Show when={!showPassword()}>
                  <IconEyeClose />
                </Show>
              </button>
            </div>
            
            {error() && (
              <div class="text-red-400 text-sm text-center bg-red-900/30 p-3 rounded-lg border border-red-800/50">{error()}</div>
            )}
            <button disabled={isLoading()} type="submit" class="w-full py-3 px-4 bg-rose-800 hover:bg-rose-600 text-white font-medium rounded-lg focus:outline-none transition disabled:opacity-50 disabled:cursor-not-allowed">
              {isLoading() ? "Loading..." : "Login"}
            </button>
          </form>

          <p class="text-center text-sm text-gray-500">
            Belum punya akun ?{" "}
            <A href="/signup" class="text-rose-400 hover:text-rose-600 font-medium">Signup</A>
          </p>
        </div>
      </div>
    </div>
  );
}

export function SignupPage() {
  const navigate = useNavigate();

  const [name, setName] = createSignal("");
  const [email, setEmail] = createSignal("");
  const [password, setPassword] = createSignal("");
  const [error, setError] = createSignal<string | null>(null);
  const [isLoading, setLoading] = createSignal(false);
  const [showPassword, setShowPassword] = createSignal(false);

  const hanldeSubmit = async (e: SubmitEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setLoading(true);
    setError(null);
    try {
      await new Promise(r => setTimeout(r, 500));
      navigate("/signin", { replace: true });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Terjadi kesalahan");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div class="min-h-screen bg-linear-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center px-4">
      <div class="w-full max-w-md">
        <div class="bg-gray-800/40 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl shadow-black/50 p-8 space-y-8">
          <div class="text-center">
            <h1 class="text-3xl font-bold text-white tracking-tight">Konex</h1>
            <p class="mt-2 text-gray-400">Simple sosial media</p>
          </div>

          <form class="space-y-6" onSubmit={hanldeSubmit}>
            <div>
              <label for="name" class="block text-sm font-medium text-gray-300">Name</label>
              <input
                id="name"
                type="text"
                value={name()}
                onInput={(e) => setName(e.currentTarget.value)}
                placeholder="Riky Ripaldo"
                class="mt-1 block w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-rose-400 transition"
                required
              />
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-gray-300">Email</label>
              <input
                id="email"
                type="email"
                value={email()}
                onInput={(e) => setEmail(e.currentTarget.value)}
                placeholder="rikyripaldo@konex.com"
                class="mt-1 block w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-rose-400 transition"
                required
              />
            </div>
            <div class="relative">
              <label for="password" class="block text-sm font-medium text-gray-300">Password</label>
              <input
                id="password"
                type={showPassword() ? "text" : "password"}
                value={password()}
                onInput={(e) => setPassword(e.currentTarget.value)}
                placeholder="admin#1234"
                class="mt-1 block w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-rose-400 transition"
                required
              />
              <button onClick={() => setShowPassword(!showPassword())} type="button" aria-label={showPassword() ? "Sembunyikan password" : "Tampilkan password"} class="absolute inset-y-0 right-0 top-5 flex items-center justify-center px-4 text-gray-400 hover:text-gray-300 focus:outline-none focus:text-rose-400 transition-colors">
                <Show when={showPassword()}>
                  <IconEyeOpen />
                </Show>
                <Show when={!showPassword()}>
                  <IconEyeClose />
                </Show>
              </button>
            </div>
            
            {error() && (
              <div class="text-red-400 text-sm text-center bg-red-900/30 p-3 rounded-lg border border-red-800/50">{error()}</div>
            )}
            <button disabled={isLoading()} type="submit" class="w-full py-3 px-4 bg-rose-800 hover:bg-rose-600 text-white font-medium rounded-lg focus:outline-none transition disabled:opacity-50 disabled:cursor-not-allowed">
              {isLoading() ? "Loading..." : "Create"}
            </button>
          </form>

          <p class="text-center text-sm text-gray-500">
            Sudah punya akun ?{" "}
            <A href="/signin" class="text-rose-400 hover:text-rose-600 font-medium">Signin</A>
          </p>
        </div>
      </div>
    </div>
  );
}