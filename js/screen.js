import { MaxAndMin } from "./MaxMin.js";
const d = document;

export function interaction() {
  const MaxMin = new MaxAndMin();
  // MaxMin.print();

  d.addEventListener("click", (e) => {
    if (e.target.matches(".btn-initial")) {
      console.log("ejecutando");
      MaxMin.print();
    }

    if (e.target.matches(".btn-input")) {
      MaxMin.add();
      MaxMin.delete();
    }

    if (e.target.matches("#max-to-min")) {
      MaxMin.end(e.target.id);
    }

    if (e.target.matches("#min-to-max")) {
      MaxMin.end(e.target.id);
    }

    if (e.target.matches("#btn-restart")) {
      alert("fin");
      window.location.reload();
    }
  });
}
