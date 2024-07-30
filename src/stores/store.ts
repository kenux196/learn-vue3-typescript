import { defineStore, type PiniaPluginContext } from 'pinia';
import { computed, reactive, ref } from 'vue';
import { bookMemoryRepository } from '@/utils/BookRepository';

export const store = reactive({
  player: null,
  setUser(user: any) {
    this.player = user;
  },
  bookRepository: bookMemoryRepository,
});

// setup store 방식
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0);
  const name = ref('Eduardo');
  const doubleCount = computed(() => count.value * 2);

  function increment() {
    count.value++;
  }

  function decrement() {
    count.value--;
  }

  function $reset() {
    count.value = 0;
  }

  const persist = () => {
    return {
      enable: true,
      strategies: [{ storage: localStorage }],
      beforeRestore: (ctx: PiniaPluginContext) => {
        // 복구전 호출되는 콜백
        console.log(`about to restore '${ctx.store.$id}`);
      },
      afterRestore: (ctx: PiniaPluginContext) => {
        // 복구 후 호출되는 콜백
        console.log(`just restored '${ctx.store.$id}'`);
      },
    };
  };

  return { count, name, doubleCount, increment, decrement, $reset, persist };
});

export const useCounterOptionApiStore = defineStore('counter2', {
  state: () => {
    return {
      count: 0,
      name: 'kenux',
    };
  },
  getters: {
    doubleCount(): number {
      return this.count * 2;
    },
  },
  actions: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  },
});

export const useUserStore = defineStore('storeUser', () => {
  const firstName = ref('firstName');
  const lastName = ref('lastName');
  const accessToken = ref('xxxxxxxxxxxxxxxxxxxxxxx');

  function setName(fName: string, lName: string) {
    firstName.value = fName;
    lastName.value = lName;
  }

  function setToken(value: string) {
    accessToken.value = value;
  }

  function $reset() {
    firstName.value = '';
    lastName.value = '';
    accessToken.value = '';
  }

  const persist = () => {
    return {
      enabled: true,
      storage: localStorage, // default : localstorage
      paths: ['accessToken', 'lastName'], // 특정값만 지정해서 저장.
      beforeRestore: (ctx: PiniaPluginContext) => {
        // 복구전 호출되는 콜백
        console.log(`about to restore '${ctx.store.$id}`);
      },
      afterRestore: (ctx: PiniaPluginContext) => {
        // 복구 후 호출되는 콜백
        console.log(`just restored '${ctx.store.$id}'`);
      },
    };
  };
  return { firstName, lastName, accessToken, setName, setToken, $reset, persist };
});
