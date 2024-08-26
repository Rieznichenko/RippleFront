"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

interface ITableComponent {
  column: any;
  data: any;
  hideHeader?: boolean;
}
const TableComponent = ({
  column,
  data,
  hideHeader = false,
}: ITableComponent) => {
  const renderColumn = (array: any) => {
    return array.length > 0
      ? array.map((item: any, index: any) => {
          return (
            <TableHead
              key={index}
              className={
                index === 0
                  ? "rounded-tl-3xl"
                  : index === array.length - 1
                  ? "rounded-tr-3xl"
                  : ""
              }
            >
              {item}
            </TableHead>
          );
        })
      : null;
  };

  const renderData = (array: any, column: any) => {
    
    return array.length ? array.map((item: any, index: any) => {
      return (
        <TableRow
          key={index}
          className={cn(
            "bg-[#4f555e] font-lato overflow-auto text-white border-[#3C3F47] "
          )}
        >
          {Object.keys(item).length > 0 &&
            Object.keys(item).map((nestedItem: any, nestedIndex: any) => {
              return (
                <TableCell key={nestedIndex} className={`font-medium ${item[nestedItem] && nestedItem == 'pubkey'?'text-left pl-[5%]':''}`}>
                  {item[nestedItem] == undefined ? '-' : item[nestedItem]}
                </TableCell>
              );
            })}
        </TableRow>
      );
    }) : (
        <TableRow
          className={cn(
            "bg-[#4f555e] font-lato overflow-auto text-white border-[#3C3F47] "
          )}
        >
            {column.length && column.map((item: any, index: any) => {
              return (
                <TableCell key={index} className={`font-medium`}>
                  -
                </TableCell>
              );
            })
            }
        </TableRow>
      );
  };

  return (
    <Table className="">
      {!hideHeader && (
        <TableHeader>
          <TableRow className="bg-[#3C3F47] text-lg  border-[#3C3F47]">
            {renderColumn(column)}
          </TableRow>
        </TableHeader>
      )}
      <TableBody>{renderData(data, column)}</TableBody>

      <TableFooter className="border-[#3C3F47]">
        <TableRow className="bg-[#3C3F47]  border-[#3C3F47]">
          {column?.map((item: any, index: any) => {
            return (
              <TableHead
                key={index}
                className={
                  index === 0
                    ? "rounded-bl-3xl"
                    : index === column.length - 1
                    ? "rounded-br-3xl"
                    : ""
                }
              ></TableHead>
            );
          })}
        </TableRow>
      </TableFooter>
    </Table>
  );
};

export default TableComponent;
