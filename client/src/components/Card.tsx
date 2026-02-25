import { JSX } from "solid-js";
import { IconArrowRight } from "./Icons";
import { A } from "@solidjs/router";

export function CardInfo(props: { children: JSX.Element, title?: string }) {
  return (
    <div class="space-y-4">
      <h2 class={`text-lg font-medium text-gray-300 ${props.title === undefined ? "hidden" : ""}`}>{props.title}</h2>
      <div class="bg-gray-900/60 rounded-xl border border-gray-800 divide-y divide-gray-800">
        {props.children}
      </div>
    </div>
  )
}

interface CardCheckBoxSettingsProps {
  checked: boolean;
  title: string;
  description?: string;
  onChecked: (e: boolean) => void;
}

export function CardCheckBoxSettings(props: CardCheckBoxSettingsProps) {
  const id = props.title.trim().toLowerCase().replaceAll(" ", "");

  return (
    <div class="flex items-center justify-between px-5 py-4">
      <div>
        <p class="font-medium">{props.title}</p>
        <p class="text-sm text-gray-500">{props.description}</p>
      </div>
      <label for={id} class="relative inline-flex items-center cursor-pointer">
        <input
          id={id}
          type="checkbox"
          checked={props.checked}
          onChange={(e) => props.onChecked(e.currentTarget.checked)}
          class="sr-only peer"
        />
        <div class="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:bg-rose-400 after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-5"></div>
      </label>
    </div>
  );
}

interface CardButtonSettingsProps {
  title: string;
  description?: string;
  isButton?: boolean;
  url?: string;
}

export function CardButtonSettings(props: CardButtonSettingsProps) {
  return (
    <A href={props.url === undefined ? "" : props.url} class="flex items-center justify-between px-5 py-4 hover:bg-gray-800/50 transition">
      <div>
        <p class="font-medium">{props.title}</p>
        <p class="text-sm text-gray-500">{props.description}</p>
      </div>
      {props.isButton && <IconArrowRight />}
    </A>
  );
}