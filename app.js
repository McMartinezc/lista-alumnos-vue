import {
  createApp,
  ref,
  computed,
} from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  setup() {

    const students = ref([
      "Albertina",
      "Katerina",
      "Ester",
      "Galis",
      "Oriol",
      "Susana",
      "MCarmen",
      "Gerard",
      "Dayane",
      "Diego",
      "Maria",
    ]);

    const studentLength = (student)=>{
      return student.length >= 7 ? "grey" : "";
    };

  
    return {
      students, studentLength
    };
  },
}).mount("#app");
