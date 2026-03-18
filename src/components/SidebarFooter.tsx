const SidebarFooter = () => {
    return (
        <div className="sidebarFooter">
            <button style={{
                backgroundColor: 'var(--primary)',
                outline: 'none',
                border: "none",
                color: '#FFF',
                flex: 1,
                padding: '8px 16px',
                width: '100%',
                borderRadius: '8px'
            }} onClick={() => {
            }}>
                Export PDF
            </button>
        </div>
    );
};

export default SidebarFooter;