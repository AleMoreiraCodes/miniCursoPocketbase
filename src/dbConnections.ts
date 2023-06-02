import { Note, NoteContent, NotePocketBase } from "./types";

//LISTA TODAS AS NOTAS DO BD
export async function fetchData(): Promise<Note[]> {
 const fetchNotes = async () => {
   const res = await fetch(
     "http://127.0.0.1:8090/api/collections/note/records?expand=data"
   );
   const data = await res.json();
   return data?.items as NotePocketBase[];
 };


 //resolve o problema das promessas
 const promise = Promise.resolve(fetchNotes());


 //pega o resultado das promessas
 const noteArray: Note[] = [];
 await promise.then(async (value) => {
   //Cria novo array com os objetos do conteudo da nota (title, content)
   let noteContentArray: NoteContent[] = [];
   value.map(({ expand }) => {
     const newObj = { title: expand.data.title, content: expand.data.content };
     noteContentArray.push(newObj);
   });


   //Cria novo array com os objetos das notas em si (sem a parte do conteudo e somente as que importam)
   const notesWithRightFields = value.map(({ id, rowSpan, columnSpan }) => ({
     id,
     rowSpan,
     columnSpan,
   }));


   //Junta os dois adicionando o conteudo dentro do novo campo "data"
   for (let i = 0; i < notesWithRightFields.length; i++) {
     const record = { ...notesWithRightFields[i], data: noteContentArray[i] };
     noteArray.push(record);
   }


   // //seta o novo estado das notas
   // await setData(noteArray);
 });
 return noteArray;
}
