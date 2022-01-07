export type TodosProps = {
  title: string;
  completed: boolean;
  id: string;
  idFirebase: string;
};

export type collectionCardProps = {
  cardName: string;
  cardColors: string;
  id: string;
  idFirebase: string;
  todos: TodosProps[];
};
