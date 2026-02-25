import { A, useNavigate, useParams } from "@solidjs/router";
import { createResource, createSignal, Show } from "solid-js";
import { AppLayout, Main } from "../components/Content";
import { IconArrowLeft, IconSignout, IconUser } from "../components/Icons";
import { CardButtonSettings, CardCheckBoxSettings, CardInfo } from "../components/Card";

const fetchUser = async (id: string) => {
  return {
    id,
    name: "Riky Ripaldo",
    email: "riky@konex.com",
    status: "I have a dream",
    avatarUrl: "https://picsum.photos/seed/riky/300/300",
    isVerify: true,
    followers: 1234,
    following: 4321,
    postCount: 25
  };
};

export function AccountPage() {
  const params = useParams();
  const [user] = createResource(() => params.id, fetchUser);

  return (
    <AppLayout navigateOff>
      <div class="relative h-48 bg-linear-to-r from-gray-900 via-gray-800 to-gray-700">
        <A href="/" class="absolute top-4 left-4"><IconArrowLeft /></A>
        <div class="absolute top-20 left-50">
          <span class="text-white text-4xl font-bold hover:text-gray-200">Konex</span>
        </div>
        <div class="absolute -bottom-16 left-4 w-32 h-32 rounded-full overflow-hidden border-2 border-rose-400 shadow-2xl shadow-black/60">
          <Show when={!user.loading} fallback={<div class="w-full h-full bg-gray-700 animate-pulse flex items-center justify-center"><IconUser class="w-16 h-16" /></div>}>
            <img src={user()?.avatarUrl} alt={user()?.name} class="w-full h-full object-cover" />
          </Show>
        </div>
      </div>

      <div class="pt-20 px-5">
        <h1 class="text-2xl font-bold">{user()?.name || "Loading..."}</h1>
        <p class="text-gray-400">{user()?.email || "loading"}</p>
        <p class="mt-3 text-gray-300">{user()?.status || "Nothing"}</p>
        <div class="flex gap-6 mt-4 text-sm">
          <div>
            <span class="font-bold">{user()?.following}</span>
            <span class="text-gray-400">{" "}Mengikuti</span>
          </div>
          <div>
            <span class="font-bold">{user()?.followers}</span>
            <span class="text-gray-400">{" "}Pengikut</span>
          </div>
          <div>
            <span class="font-bold">{user()?.postCount}</span>
            <span class="text-gray-400">{" "}Postingan</span>
          </div>
        </div>
        {/** if your profile begin */}
        <div class="mt-6 flex gap-3">
          <button class="flex-1 py-2.5 bg-rose-600 hover:bg-rose-500 rounded-full font-medium transition">Ikuti</button>
          <button class="flex-1 py-2.5 bg-gray-800 hover:bg-gray-700 border border-gray-600 rounded-full transition">Chat</button>
        </div>
        {/** if your profile end */}
      </div>

      <div class="mt-8 px-4">
        <h2 class="text-xl font-semibold mb-4">Postingan</h2>
        <Main isThisUser />
      </div>
    </AppLayout>
  );
}

export function SettingsPage() {
  const navigate = useNavigate();
  const [isNotify, setNotify] = createSignal(true);
  const [isDark, setDark] = createSignal(true);

  const handleLogout = () => {
    localStorage.removeItem("konex-token");
    navigate("/signin", { replace: true });
  };

  return (
    <AppLayout title="Pengaturan" navigate="/">
      <div class="px-5 pt-8 space-y-8">
        <CardInfo title="Akun">
          <CardButtonSettings title="Edit Profile" description="Ubah foto, nama, status" url="/account/edit" isButton />
          <button class="w-full flex items-center justify-between px-5 py-4 hover:bg-gray-800/50 transition text-left">
            <div>
              <p class="font-medium">Email</p>
              <p class="text-sm text-gray-500">riky@konex.com</p>
            </div>
          </button>
          <button onClick={handleLogout} class="w-full flex items-center justify-between px-5 py-4 hover:bg-rose-950/30 transition text-left text-rose-400">
            <p class="font-medium">Keluar</p>
            <IconSignout />
          </button>
        </CardInfo>

        <CardInfo title="Preferensi">
          <CardCheckBoxSettings title="Mode gelap" description="Aktifkan tema gelap" checked={isDark()} onChecked={(e) => setDark(e)} />
          <CardCheckBoxSettings title="Notifikasi" description="Terima pembritahuan aplikasi" checked={isNotify()} onChecked={(e) => setNotify(e)} />
        </CardInfo>

        <CardInfo title="Informasi">
          <CardButtonSettings title="Team" description="Riky Ripaldo, ChatGPT AI, Grok AI"/>
          <CardButtonSettings title="Icons" description="Flowbite Icons - Free and open-source SVG icons" url="https://flowbite.com/icons" isButton />
          <CardButtonSettings title="Frontend Framework" description="SolidJS | https://www.solidjs.com" url="https://www.solidjs.com" isButton />
          <CardButtonSettings title="Backend Framework" description="Actix Web | https://actix.rs" url="https://actix.rs" isButton />
        </CardInfo>
      </div>
    </AppLayout>
  );
}