import Navigation from "@components/common/Navigation"
import Footer from "@components/common/Footer"
import { motion } from "framer-motion"
import { useRouter } from "next/router"
// import { useAuth } from "@client/auth"
import classnames from "classnames"
import { ReactNode } from "react"

const variants = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
}

const PageContainer = ({
  children,
  footer = true,
  hide = false,
}: {
  footer?: boolean
  hide?: boolean
  children: ReactNode
}) => {
  const router = useRouter()

  return (
    <div className="font-display">
      <div className={classnames(hide && "hidden")}>
        <Navigation />
      </div>
      <motion.div initial="initial" animate="animate" variants={variants} key={router.pathname}>
        {children}
      </motion.div>
      {footer && (
        <div className={classnames(hide && "hidden")}>
          <Footer />
        </div>
      )}
    </div>
  )
}

export default PageContainer
