import { JSX } from "solid-js";

type IconsProps = JSX.SvgSVGAttributes<SVGSVGElement>;

export const IconEyeOpen = (props: IconsProps) => {
  return (
    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  );
};

export const IconEyeClose = (props: IconsProps) => {
  return (
    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
    </svg>
  );
};

export const IconSettings = (props: IconsProps) => {
  return (
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
};

export const IconHome = (props: IconsProps) => {
  return (
    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" {...props}>
      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
    </svg>
  );
};

export const IconSearch = (props: IconsProps) => {
  return (
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  );
};

export const IconCreate = (props: IconsProps) => {
  return (
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
    </svg>
  );
};

export const IconNotify = (props: IconsProps) => {
  return (
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    </svg>
  );
};

export const IconChat = (props: IconsProps) => {
  return (
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
    </svg>
  );
};

export const IconLike = (props: IconsProps) => {
  return (
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  );
};

export const IconComment = (props: IconsProps) => {
  return (
    <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" {...props}>
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 10.5h.01m-4.01 0h.01M8 10.5h.01M5 5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-6.6a1 1 0 0 0-.69.275l-2.866 2.723A.5.5 0 0 1 8 18.635V17a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"/>
    </svg>
  );
};

export const IconShare = (props: IconsProps) => {
  return (
    <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" {...props}>
      <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7.926 10.898 15 7.727m-7.074 5.39L15 16.29M8 12a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm12 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm0-11a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/>
    </svg>
  );
};

export const IconArrowLeft = (props: IconsProps) => {
  return (
    <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" {...props}>
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7"/>
    </svg>
  );
};


export const IconUser = (props: IconsProps) => {
  return (
    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path fill-rule="evenodd" d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" clip-rule="evenodd"/>
    </svg>
  )
};

export const IconArrowRight = (props: IconsProps) => {
  return (
    <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" {...props}>
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/>
    </svg>
  );
};

export const IconSignout = (props: IconsProps) => {
  return (
    <svg class="w-6 h-6 " fill="none" viewBox="0 0 24 24" {...props}>
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H8m12 0-4 4m4-4-4-4M9 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2"/>
    </svg>
  );
};

export const IconMedia = (props: IconsProps) => {
  return (
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
};

export const IconAnimateLoading = (props: IconsProps) => {
  return (
    <svg class="animate-spin h-5 w-5" viewBox="0 0 24 24" {...props}>
      <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none" class="opacity-25" />
      <path fill="currentColor" d="M4 12a8 8 0 018-8v8h8a8 8 0 01-8 8 8 8 0 01-8-8z" class="opacity-75" />
    </svg>
  );
};

export const IconClose = (props: IconsProps) => {
  return (
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
};