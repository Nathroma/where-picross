import type { PicrossSave } from "@/types/local-save";
import { useMemo } from "react";

export function saveProgress(id: number, saveDatas: PicrossSave)  {
    window.localStorage.setItem(String(id), JSON.stringify(saveDatas))
}

export function useLoadProgress(id: number): PicrossSave {
    const blankDatas = useMemo(() => {
        return {
            time: 0,
            isComplete: false,
            gridState: null
        }
    }, [])

    const progression: PicrossSave = useMemo(() => {
        const saveDatas = window.localStorage.getItem(String(id))
        return saveDatas !== null ? JSON.parse(saveDatas) : blankDatas
    }
    ,[blankDatas])
    return progression
}