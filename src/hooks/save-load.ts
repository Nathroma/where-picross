import type { PicrossSave } from "@/types/local-save";
import { useMemo } from "react";

export function saveProgress(id: string, saveDatas: PicrossSave)  {
    window.localStorage.setItem(id, JSON.stringify(saveDatas))
}

export function useLoadProgress(id: string): PicrossSave {
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