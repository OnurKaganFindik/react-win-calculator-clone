const styles = {
    screenSection: {
        display: 'flex',
        with: '100%',
        height: '30%',
        justifyContent: 'flex-end',
    },
    mainText: {
        color: '#fff',
        fontSize: 30,
        padding: 10,
    },
    caption: {
        color: '#999',
        fontSize: 17,
        paddingRight: 0,
    },
};


const ScreenSection = () => {
    return (
        <div style={styles.screenSection}>
            <span style={styles.caption}> 25</span>
            <span style={styles.mainText}>
                asd
            </span>
        </div>
    );
};


export default ScreenSection;