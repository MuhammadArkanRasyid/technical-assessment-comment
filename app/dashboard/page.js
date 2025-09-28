"use client";

import { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const [comments, setComments] = useState([]);
  const [search, setSearch] = useState("");
  const router = useRouter();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);

  const handleDelete = (id) => {
    setComments((prev) => prev.filter((c) => c.id !== id));
  };

  const filteredComments = comments.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.email.toLowerCase().includes(search.toLowerCase()) ||
    c.body.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

    
      <div className="flex justify-between mb-4">
        <InputText
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Name"
          className="p-inputtext-sm w-full md:w-1/3 p-2"
        />
        <Button
          label="Create Comment"
          className="p-button-success ml-2"
          onClick={() => router.push("/create-comment")}
        />
      </div>

      
      <DataTable
        value={filteredComments}
        paginator
        rows={10}
        className="shadow rounded-lg"
        tableStyle={{ minWidth: "50rem" }}
      >
        <Column field="name" header="Name"></Column>
        <Column field="email" header="Email"></Column>
        <Column field="body" header="Comment"></Column>
        <Column
          header="Actions"
          body={(rowData) => (
            <Button
              label="Delete"
              icon="pi pi-trash"
              className="p-button-danger p-button-sm"
              onClick={() => handleDelete(rowData.id)}
              text raised
            />
          )}
        />
      </DataTable>
    </div>
  );
}
