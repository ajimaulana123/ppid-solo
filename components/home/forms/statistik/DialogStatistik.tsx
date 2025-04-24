import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import { TabsStatistik } from "./Tabs"

export function DialogStatistik() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="w-full px-4 py-2.5 bg-orange-600 text-white rounded-xl hover:bg-orange-700 transition-colors shadow-sm hover:shadow-md transition-all p-6 text-center transform hover:-translate-y-1">
                    Lihat Statistik
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <TabsStatistik />
            </DialogContent>
        </Dialog>
    )
}