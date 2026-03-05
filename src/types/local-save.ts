import type { Picross } from "@/types/global-types";

export type PicrossSave = {
    time: number,
    isComplete: boolean,
    gridState: Picross | null,
}