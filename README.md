# Design Engineer technical challenge @ Base UI

This challenge is part of the hiring process for some positions at Base UI.
The idea is to make as much progress as possible under a given time constraint of (3-4 hours).

## Context

At Base UI, because we are a DevTools company, you'll make product decisions.
You will flesh out product requirements and turn them into a technical design and implementation.
This challenge simulates that, we will review the product decisions you make, the quality of the code, and the design of the UI.
We want to get a glimpse of how you will perform in the role.

## The challenge

Given that the Design Engineer position sits right at the intersection between engineering and design, this challenge aims to simulate how a potential day-to-day situation plays out.
Our challenge is to **build a simplified version of a Combo Box**.
We'll review how you make design and API decisions and the quality of the written code.

### Introduction

A Combo Box is a component that combines a _input_ with a _listbox_, allowing the users to choose among a long list of mutually exclusive values. For instance, Chrome's URL bar:

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="/combo-box-dark.png">
  <img alt="" src="/combo-box.png" height="100%">
</picture>

### Objective

The goal of this challenge is to implement the above component:

- [ ] Don't use high-level primitives like [`<datalist>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist) or pre-made React UI components
- [ ] Reproduce as much of the UX of Chrome's URL bar as possible. You can also benchmark with the UX of Google's main search bar to adjust the tradeoffs. The end goal is to be able to use the component for the same search use case.
- [ ] Use React hooks, no class components
- [ ] Use TypeScript, `any` and `@ts-ignore` are accepted but need to be justified (comments)
- [ ] Make sure the component is performant, it can render 300 options without virtualization
- [ ] Make sure the component meets a11y requirements, see [WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/) for guidance. Their [examples](https://www.w3.org/WAI/ARIA/apg/example-index/combobox/combobox-autocomplete-both.html) might be the most helpful.
- [ ] Make sure it looks great, has a beautiful UI
- [ ] Make sure the component has an ergonomic API and can be used in a generic way with different data sets

In practice, such a solution would require dozens of hours to reach the high-quality bar we expect Base UI components to have (if not > 100 hours). To keep the challenge short, we will focus on solving a subset of the problem:

- you may drop behaviors that have a too high time opportunity cost. Please **document the behaviors you drop and why**.
- don't write documentation but enough to see how to use the component, e.g. one demo.
- only one browser support (of your choice)
- no touch screen support
- no dark mode support
- no right-to-left support
- no npm publish

We encourage you to add your creative spin to the design—we want to see your design taste!

### Work environment

To save you time, we created a working environment with Next.js, TypeScript, ESLint, and other complementary dependencies.
Follow the steps:

- Clone the repo: `git clone git@github.com:mui/tech-challenge-design-engineer.git`
- Install the dependencies: `pnpm i`
- Start Next.js: `pnpm dev`
- Open http://0.0.0.0:3002/

## Submission

Instructions:

- **DO NOT** fork / host your project on a public repository.
- Please send us a zip file containing this project using the upload link that we have provided by email (**with** the _.git_ folder).
- To significantly reduce the size of the archive, remove the `/_node_modules_/` and `/.next/` folders.
- If you don't have the upload link, you can send it to job@mui.com.

We're excited and looking forward to seeing what you'll create!
Good luck 🚀
