import type { Component } from 'solid-js';
import { SigninPage, SignupPage } from './app/Auth';
import { A, Route } from '@solidjs/router';
import { CorePage } from './app/Core';
import { AccountPage, SettingsPage } from './app/About';
import { CheckAuth } from './components/CheckAuth';
import { CreatePost } from './app/Posts';

const App: Component = () => {
  return (
    <>
      <Route path="/signin" component={SigninPage} />
      <Route path="/signup" component={SignupPage} />

      <Route component={CheckAuth}>
        <Route path="/" component={CorePage} />
        <Route path="/account" component={AccountPage} />
        <Route path="/account/:id" component={AccountPage} />
        <Route path="/settings" component={SettingsPage} />
        <Route path="/create" component={CreatePost} />
      </Route>

      <Route path="*" component={() => {
        return (
          <div class="min-h-screen flex flex-col justify-center items-center text-white bg-linear-to-br from-gray-900 via-black to-gray-900">
            <h1 class="text-4xl font-bold">404</h1>
            <p class="text-2xl font-semibold text-gray-300 mt-2">Page not found</p>
            <A href="/" class="mt-2 bg-rose-500 rounded-full px-2 font-semibold hover:bg-rose-600 hover:scale-120 transition duration-75">back</A>
          </div>
        );
      }} />
    </>
  );
};

export default App;
