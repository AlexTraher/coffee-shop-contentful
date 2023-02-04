import { SiteHeader } from "@/components/site-header"

interface LayoutProps {
  children: React.ReactNode
  preview?: boolean
}

export function Layout({ children, preview = false }: LayoutProps) {
  return (
    <>
      {preview ? (
        <div className=" bg-yellow-300 w-full text-center py-2 text-blue-600">
          <h1 className="text-xl  font-bold">This is a preview</h1>
          <p className="hover:underline"><a href="/api/exit-preview">Click here to exit</a></p>
        </div>
      ) : null}
      <SiteHeader />
      <main>{children}</main>
    </>
  )
}
