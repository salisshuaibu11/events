import { FormControl } from "@angular/forms";

export function restrictedWords(words: [string]) {
    return (control: FormControl): {[key: string]: any} => {
      if (!words) [null];

      let invalidWords = words
        .map((word: any) => control.value.includes(word) ? word : null)
        .filter((word: any) => word != null)

      return invalidWords && invalidWords.length > 0
        ? {'restrictedWords': invalidWords.join(", ")}
        : []
    }
  }
