import { useConfig } from '@/lib/config'
import Vercel from '@/components/Vercel'
import { useEffect, useState } from 'react'
const Footer = ({ fullWidth }) => {
  const BLOG = useConfig()
  const [showICP, setShowICP] = useState(false)

  const d = new Date()
  const y = d.getFullYear()
  const from = +BLOG.since
   // 只在客户端运行
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setShowICP(window.location.hostname.includes('akapril.cn'))
    }
  }, [])
  
  return (
    <div
      className={`mt-6 flex-shrink-0 m-auto w-full text-gray-500 dark:text-gray-400 transition-all ${
        !fullWidth ? 'max-w-2xl px-4' : 'px-4 md:px-24'
      }`}
    >
      <hr className="border-gray-200 dark:border-gray-600" />
      <div className="my-4 text-sm leading-6">
        <div className="flex align-baseline justify-between flex-wrap">
          <p>
             © {BLOG.author} {from === y || !from ? y : `${from} - ${y}`}   {showICP && (
              <>
                {' | '}
                <a
                  href="https://beian.miit.gov.cn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {BLOG.authNo}
                </a>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
