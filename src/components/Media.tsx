import React from 'react';

const Media: React.FC = () => {
    return (
        <div id='Media' data-testid="media" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh'}}>
            <div style={{width: '100%', maxWidth: '900px', margin: 'auto'}}>
                <h2 style={{textAlign: 'center', fontSize: '3em', fontWeight: 'bold'}} className="text-shadow">Trailer</h2>
                <div style={{position: 'relative', paddingBottom: '56.25%', height: '0', overflow: 'hidden'}}>
                    <iframe id="iframe1" style={{position: 'absolute', top: '0', left: '0', width: '100%', height: '100%'}}
                            src="https://www.youtube.com/embed/NaaZTINIz20"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                </div>
            </div>
        </div>
    )
}

export default Media;
