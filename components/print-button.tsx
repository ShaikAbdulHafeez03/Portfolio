"use client"

import { Button } from "@/components/ui/button"

export function PrintButton() {
  return (
    <Button className="print:hidden bg-transparent" variant="outline" onClick={() => window.print()}>
      Print
    </Button>
  )
}
