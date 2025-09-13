import { FC, ReactNode } from "react";

interface TableProps {
  children: ReactNode;
  className?: string;
}

interface TableComponent extends FC<TableProps> {
  Header: FC<TableProps>;
  Body: FC<TableProps>;
  Row: FC<TableProps>;
}

const Table: TableComponent = ({ children }: TableProps) => {
  return (
    <div className="bg-secondary-0 overflow-x-auto">
      <table>{children}</table>
    </div>
  );
};

export default Table;

const TableHeader: FC<TableProps> = ({ children }) => {
  return (
    <thead>
      <tr>{children}</tr>
    </thead>
  );
};

const TableBody: FC<TableProps> = ({ children }) => {
  return <tbody>{children}</tbody>;
};
const TableRow: FC<TableProps> = ({ children }: TableProps) => {
  return <tr>{children}</tr>;
};

Table.Header = TableHeader;
Table.Body = TableBody;
Table.Row = TableRow;
