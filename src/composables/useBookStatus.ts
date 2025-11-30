// src/composables/useBookStatus.ts
import { EnumBookStatus } from "@/types";

export function useBookStatus() {

    const getStatusClass = (status: EnumBookStatus) => {
        switch (status) {
            case EnumBookStatus.Completed:
                return "bg-completed";
            case EnumBookStatus.InProgress:
                return "bg-reading text-white";
            case EnumBookStatus.NotStarted:
                return "bg-toRead text-white";
            default:
                return "";
        }
    };

    const getStatusText = (status: EnumBookStatus) => {
        switch (status) {
            case EnumBookStatus.Completed:
                return "Completed";
            case EnumBookStatus.InProgress:
                return "Reading";
            case EnumBookStatus.NotStarted:
                return "To Read";
            default:
                return "";
        }
    };

    return { getStatusClass, getStatusText };
}
