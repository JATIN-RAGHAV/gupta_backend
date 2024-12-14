"use client"

import { ColumnDef } from "@tanstack/react-table"
import {CellAction} from "@/app/(dashboard)/[storeId]/(routes)/poles/components/cell-action";


// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type PoleColumn= {
    id: string
    name: String
    value: string
    createdAt: string
}

export const columns: ColumnDef<PoleColumn>[] = [
    {
        accessorKey: "name",
        header: "Name",
    },{
        accessorKey: "value",
        header: "Value",
    },
    {
        accessorKey: "createdAt",
        header: "Date",
    },
    {
        id: "actions",
        cell:({row})=> <CellAction data={row.original}/>
    }

]