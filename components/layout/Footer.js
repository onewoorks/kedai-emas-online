import styles from '../../styles/Home.module.css'

const LayoutFooter = () => {
  return (
    <div className="mt-3">
      <footer className={styles.footer}>
        Developed by{' '}
        <a style={{ paddingRight: 5, paddingLeft: 5 }} href="https://onewoorks-solutions.com">Onewoorks Solutions</a>{' '}
          for Kedai Emas Ariffin
      </footer>
    </div>

  )
}

export default LayoutFooter