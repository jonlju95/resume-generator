const PreviewPane = () => {
    return (
        <div className={'col'} style={{width: '100%'}}>
            <div className={'row'} style={{
                padding: '8px 16px',
                height: '64px',
                background: 'var(--neutral-50)',
                borderBottom: '1px solid var(--neutral-200)',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <div><p>Preview</p></div>
                <div><p>File name</p></div>
            </div>
            <div className={'row'} style={{
                padding: '40px',
                height: '100%',
                overflowY: 'auto',
                marginTop: '-16px',
                backgroundColor: 'var(--neutral-100)',
                flex: 1
            }}>
                <div style={{backgroundColor: '#FFF', width: '595px', height: '842px'}}></div>
            </div>

        </div>
    );
};

export default PreviewPane;