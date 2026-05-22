-- Run this in Supabase: SQL Editor → New query → Run

create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  short_description text not null,
  full_description text not null,
  context text,
  tech_stack text[] not null default '{}',
  github_url text,
  live_demo_url text,
  video_url text,
  image_urls text[] not null default '{}',
  featured boolean not null default false,
  created_at timestamptz not null default now()
);

alter table public.projects enable row level security;

drop policy if exists "Public can read projects" on public.projects;
create policy "Public can read projects"
  on public.projects for select
  using (true);
