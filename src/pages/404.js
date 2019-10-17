import React from "react"
import styles from "./404.module.css"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <div>
      <h1 className={styles.header}>Page not found</h1>
      <p clù={styles.errorMessage}>
        The page you are looking for, does not exist.
      </p>
    </div>
  </Layout>
)
