const styles = {
    topHeader: {
        width: '100%',
        height: 30,
    },
    text: {
        fontSize: 10,
        color: '#fff',
        margin:5,
    },
};

const TopHeader = () => (
    <div stayle={styles.topHeader}>
        <span style={styles.text}> Hesap Makinesi </span>
    </div>
    );


export default TopHeader;