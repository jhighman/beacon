import Link from 'next/link'

const navigation = [
  { name: 'Overview', href: '/docs/overview' },
  { name: 'Authentication', href: '/docs/auth' },
  { name: 'Endpoints', href: '/docs/endpoints' },
]

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar Navigation */}
      <div className="w-64 border-r bg-gray-50/50 dark:bg-gray-900/50">
        <nav className="p-4 sticky top-0">
          <div className="mb-8">
            <Link 
              href="/docs" 
              className="text-xl font-bold hover:text-gray-600 dark:hover:text-gray-300"
            >
              Beacon Docs
            </Link>
          </div>
          <ul className="space-y-2">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-8 py-6">
        {children}
      </div>
    </div>
  )
} 