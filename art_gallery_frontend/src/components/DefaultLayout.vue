  
  <script setup>
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/vue/24/outline";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Artworks", to: { name: "artworks" }, href: "#" },
  { name: "Artists", to: { name: "artists" }, href: "#" },
  { name: "Upload", to: { name: "upload" }, href: "#" },
];
const userNavigation = [
  { name: "Your Profile", to: { name: "profile" }, to:{ name: "profile"} },
  { name: "Sign out", to: { name: "signOut" }, href: "#" },
];

function logout() {
  console.log("logout");
}
</script>
  
  <template>
  <!--
      This example requires updating your template:
  
      ```
      <html class="h-full bg-gray-100">
      <body class="h-full">
      ```
    -->
      
  <div class="min-h-screen">
    <Disclosure as="nav" class="bg-gray-800" v-slot="{ open }">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <div class="flex items-center">
            <RouterLink :to="{ name: 'home' }" class="shrink-0">
              <img
                class="size-8"
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              />
            </RouterLink>

            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <RouterLink
                  v-for="item in navigation"
                  :key="item.name"
                  :to="item.to"
                  :class="[
                    $route.name === item.to.name
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'rounded-md px-3 py-2 text-sm font-medium',
                  ]"
                  :aria-current="
                    $route.name === item.to.name ? 'page' : undefined
                  "
                  >{{ item.name }}</RouterLink
                >
              </div>
            </div>
          </div>
          <div class="hidden md:block">
            <div class="ml-4 flex items-center md:ml-6">
              <button
                type="button"
                class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
              >
                <span class="absolute -inset-1.5" />
                <span class="sr-only">View notifications</span>
                <BellIcon class="size-6" aria-hidden="true" />
              </button>

              <!-- Profile dropdown -->
              <Menu as="div" class="relative ml-3">
                <div>
                  <MenuButton
                    class="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
                  >
                    <span class="absolute -inset-1.5" />
                    <span class="sr-only">Open user menu</span>
                    <img
                      class="size-8 rounded-full"
                      :src="user.imageUrl"
                      alt=""
                    />
                  </MenuButton>
                </div>
                <transition
                  enter-active-class="transition ease-out duration-100"
                  enter-from-class="transform opacity-0 scale-95"
                  enter-to-class="transform opacity-100 scale-100"
                  leave-active-class="transition ease-in duration-75"
                  leave-from-class="transform opacity-100 scale-100"
                  leave-to-class="transform opacity-0 scale-95"
                >
                  <MenuItems
                    class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-hidden"
                  >
                    <MenuItems
                      v-for="item in userNavigation"
                      :key="item.name"
                      
                    >
                      <button
                        @click="
                          item.name === 'Sign out'
                            ? logout()
                            : $router.push(item.to)
                        "
                        class="block px-4 py-2 text-sm text-gray-700 w-full text-left"
                      >
                        {{ item.name }}
                      </button>
                    </MenuItems>
                  </MenuItems>
                </transition>
              </Menu>
            </div>
          </div>
          <div class="-mr-2 flex md:hidden">
            <!-- Mobile menu button -->
            <DisclosureButton
              class="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
            >
              <span class="absolute -inset-0.5" />
              <span class="sr-only">Open main menu</span>
              <Bars3Icon v-if="!open" class="block size-6" aria-hidden="true" />
              <XMarkIcon v-else class="block size-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel class="md:hidden">
        <div class="space-y-1 px-2 pt-2 pb-3 sm:px-3">
          <RouterLink
            v-for="item in navigation"
            :key="item.name"
            :to="item.to"
            :class="[
              $route.name === item.to.name
                ? 'bg-gray-900 text-white'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
              'block rounded-md px-3 py-2 text-base font-medium',
            ]"
            :aria-current="$route.name === item.to.name ? 'page' : undefined"
            >{{ item.name }}</RouterLink
          >
        </div>
        <div class="border-t border-gray-700 pt-4 pb-3">
          <div class="flex items-center px-5">
            <div class="shrink-0">
              <img class="size-10 rounded-full" :src="user.imageUrl" alt="" />
            </div>
            <div class="ml-3">
              <div class="text-base/5 font-medium text-white">
                {{ user.name }}
              </div>
              <div class="text-sm font-medium text-gray-400">
                {{ user.email }}
              </div>
            </div>
            <button
              type="button"
              class="relative ml-auto shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
            >
              <span class="absolute -inset-1.5" />
              <span class="sr-only">View notifications</span>
              <BellIcon class="size-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-3 space-y-1 px-2">
            <DisclosureButton
              v-for="item in userNavigation"
              :key="item.name"
              :as="item.name === 'Sign out' ? 'button' : 'a'"
              :href="item.name !== 'Sign out' ? item.href : null"
              @click="item.name === 'Sign out' && logout()"
              class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
            >
              {{ item.name }}
            </DisclosureButton>

            >
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
    <main>
      <div class=" min-h-screen bg-gray-100 flex flex-col items-center py-4 px-4">
    <div
      class="mt-6 max-w-7xl w-full bg-white rounded-lg shadow-lg overflow-hidden"
    > 
      <div class="mx-auto max-w-8xl px-4 py-6 sm:px-6 lg:px-8">
        <RouterView />
      </div>
      </div>
      </div>
    </main>

    <footer class="bg-gray-900 text-gray-400">
    <div class="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Hakkımızda -->
        <div>
          <h3 class="text-white text-lg font-semibold mb-4">Art Gallery</h3>
          <p class="text-sm">
            Bağımsız sanatçıların eserlerini sergileyebileceği NFT olmayan dijital bir platform.
          </p>
        </div>

        <!-- Navigasyon -->
        <div>
          <h3 class="text-white text-lg font-semibold mb-4">Links</h3>
          <ul class="space-y-2 text-sm">
            <li><router-link to="/" class="hover:text-white">Home</router-link></li>
            <li><router-link to="/artworks" class="hover:text-white">Artworks</router-link></li>
            <li><router-link to="/artists" class="hover:text-white">Artists</router-link></li>
            <li><router-link to="/contact" class="hover:text-white">Contact</router-link></li>
          </ul>
        </div>

        <!-- Sosyal medya -->
        <div>
          <h3 class="text-white text-lg font-semibold mb-4">Fallow Us</h3>
          <div class="flex space-x-4">
            <a href="#" class="hover:text-white">🌐</a>
            <a href="#" class="hover:text-white">📷</a>
            <a href="#" class="hover:text-white">🐦</a>
          </div>
        </div>
      </div>

      <div class="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between text-sm text-center md:text-left">
        <p>&copy; {{ new Date().getFullYear() }} Digital Art Gallery All rights reserved</p>
        <div class="mt-2 md:mt-0 flex space-x-4 justify-center md:justify-end">
          <a href="#" class="hover:text-white">Privacy Policy</a>
          <a href="#" class="hover:text-white">Terms & Conditions</a>
        </div>
      </div>
    </div>
    </footer>
  </div>
  
</template>
