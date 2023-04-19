// Function for legend creation and updating

function hideLegend() {d3.select('#legend').style('opacity', 0)};

function updateLegend1() {
    const title = 'Total Restorative Justice Laws';
    const layers = ['1', '2-7', '8-14', '15-21', '22-28', '29-37'];
    const colors = ['#31463f', '#3b6a52', '#538f5d', '#78b45f', '#acd85b', '#ebf952'];

    d3.select('#legend').transition().duration(1000).style('opacity', 1);

    const legend = document.querySelector('#legend');

    // update legend title
    const legendTitle = legend.querySelector('.legend-title');
    legendTitle.textContent = title;

    // delete existing legend items
    const legendItems = legend.querySelectorAll('.legend-item');
    legendItems.forEach(item => item.remove());

    // create new legend items
    layers.forEach((layer, i) => {
    const newItem = document.createElement('div');
    newItem.classList.add('legend-item');
    const newKey = document.createElement('div');
    newKey.classList.add('legend-key');
    newKey.style.backgroundColor = colors[i];
    newItem.appendChild(newKey);
    const newValue = document.createElement('div');
    newValue.classList.add('legend-value');
    newValue.textContent = layer;
    newItem.appendChild(newValue);
    legend.appendChild(newItem);
    });

    // wrap all legend items in one div
    const legendItemsDiv = document.createElement('div');
    legendItemsDiv.classList.add('legend-items');
    const newLegendItems = legend.querySelectorAll('.legend-item');
    newLegendItems.forEach(item => legendItemsDiv.appendChild(item));
    legend.appendChild(legendItemsDiv);
    };


function updateLegend2() {
    const title = 'Concentration of Laws Passed';
    const layers = ['0-3', '8-37'];
    const colors = ['#badefc', '#cd395b'];

    const legend = document.querySelector('#legend');

    // update legend title
    const legendTitle = legend.querySelector('.legend-title');
    legendTitle.textContent = title;

    // delete existing legend items
    const legendItems = legend.querySelectorAll('.legend-item');
    legendItems.forEach(item => item.remove());

    // create new legend items
    layers.forEach((layer, i) => {
    const newItem = document.createElement('div');
    newItem.classList.add('legend-item');
    const newKey = document.createElement('div');
    newKey.classList.add('legend-key');
    newKey.style.backgroundColor = colors[i];
    newItem.appendChild(newKey);
    const newValue = document.createElement('div');
    newValue.classList.add('legend-value');
    newValue.textContent = layer;
    newItem.appendChild(newValue);
    legend.appendChild(newItem);
    });

    // wrap all legend items in one div
    const legendItemsDiv = document.createElement('div');
    legendItemsDiv.classList.add('legend-items');
    const newLegendItems = legend.querySelectorAll('.legend-item');
    newLegendItems.forEach(item => legendItemsDiv.appendChild(item));
    legend.appendChild(legendItemsDiv);
    };

function updateLegend3() {
    const title = 'Adult Restorative Justice Laws';
    const layers = ['1', '2-7', '8-14', '15-21', '22-28', '29-37'];
    const colors = ['#31463f', '#3b6a52', '#538f5d', '#78b45f', '#acd85b', '#ebf952'];
    
    const legend = document.querySelector('#legend');
    
    // update legend title
    const legendTitle = legend.querySelector('.legend-title');
    legendTitle.textContent = title;
    
    // delete existing legend items
    const legendItems = legend.querySelectorAll('.legend-item');
    legendItems.forEach(item => item.remove());
    
    // create new legend items
    layers.forEach((layer, i) => {
    const newItem = document.createElement('div');
    newItem.classList.add('legend-item');
    const newKey = document.createElement('div');
    newKey.classList.add('legend-key');
    newKey.style.backgroundColor = colors[i];
    newItem.appendChild(newKey);
    const newValue = document.createElement('div');
    newValue.classList.add('legend-value');
    newValue.textContent = layer;
    newItem.appendChild(newValue);
    legend.appendChild(newItem);
    });
    
    // wrap all legend items in one div
    const legendItemsDiv = document.createElement('div');
    legendItemsDiv.classList.add('legend-items');
    const newLegendItems = legend.querySelectorAll('.legend-item');
    newLegendItems.forEach(item => legendItemsDiv.appendChild(item));
    legend.appendChild(legendItemsDiv);
    };

    function updateLegend4() {
        const title = 'Total Restorative Justice Laws';
        const layers = ['1', '2-7', '8-14', '15-21', '22-28', '29-37'];
        const colors = ['#31463f', '#3b6a52', '#538f5d', '#78b45f', '#acd85b', '#ebf952'];
        
        const legend = document.querySelector('#legend');
        
        // update legend title
        const legendTitle = legend.querySelector('.legend-title');
        legendTitle.textContent = title;
        
        // delete existing legend items
        const legendItems = legend.querySelectorAll('.legend-item');
        legendItems.forEach(item => item.remove());
        
        // create new legend items
        layers.forEach((layer, i) => {
        const newItem = document.createElement('div');
        newItem.classList.add('legend-item');
        const newKey = document.createElement('div');
        newKey.classList.add('legend-key');
        newKey.style.backgroundColor = colors[i];
        newItem.appendChild(newKey);
        const newValue = document.createElement('div');
        newValue.classList.add('legend-value');
        newValue.textContent = layer;
        newItem.appendChild(newValue);
        legend.appendChild(newItem);
        });
        
        // wrap all legend items in one div
        const legendItemsDiv = document.createElement('div');
        legendItemsDiv.classList.add('legend-items');
        const newLegendItems = legend.querySelectorAll('.legend-item');
        newLegendItems.forEach(item => legendItemsDiv.appendChild(item));
        legend.appendChild(legendItemsDiv);
        };

// Function for tooltips
function popup() {
    let popup = null; // declare the popup variable
  
    map.on('mouseenter', 'rj-organizations', (event) => {
      // If the user hovers over one of your markers, get its information.
      const feature = event.features[0];
  
      // Create a popup only if one doesn't exist
      if (!popup) {
        /* 
        Create a popup, specify its options 
        and properties, and add it to the map.
        */
        popup = new mapboxgl.Popup({ 
          offset: [0, -15],
          closeButton: false // remove the close button (x)
        })
          .setLngLat(feature.geometry.coordinates)
          .setHTML(
            `<h6><b>${feature.properties.orgName}</b></h6><p>${feature.properties.address}</p>`
          )
          .addTo(map);
      }
    });
  
    map.on('mouseleave', 'rj-organizations', () => {
      // Remove the popup when the user stops hovering over the marker.
      if (popup) {
        popup.remove();
        popup = null; // reset the popup variable
      }
    });
  }  
  
// Combined Layer 4 and tooltip functions
function updateLegend4AndPopup() {
    updateLegend4();
    popup();
  }
  
// Start of the map
var config = {
    style: 'mapbox://styles/elijah-messmer/clfh50gc3008e01t504qj16d7',
    accessToken: 'pk.eyJ1IjoiZWxpamFoLW1lc3NtZXIiLCJhIjoiY2xmYWNkMnFnMDRiZTNwcGJsM2J0ZjRpeCJ9.srDYVTRF4yqQ9QIz5b3EvA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    chapters: [
        {
            id: 'buffer',
            alignment: 'left',
            hidden: true,
            location: {
                center: [-98.05708, 38.17605],
                zoom: 4.23,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'hideLegend',
            onChapterEnter: [
                {
                    layer: 'rj-legislation',
                    opacity: 0,
                    duration: 2000
                }
            ],
            onChapterExit: []
        },
        {
            id: 'first-identifier',
            alignment: 'left',
            hidden: false,
            title: 'A Patchwork of Laws',
            description: 'The number of Restorative justice laws has increased significantly over the last 10 years, but access is far from equal.',
            location: {
                center: [-98.05708, 38.17605],
                zoom: 4.23,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'updateLegend1',
            onChapterEnter: [
                {
                    layer: 'rj-legislation',
                    opacity: 1,
                    duration: 2000
                },
            ],
            onChapterExit: [
                {
                    layer: 'rj-legislation',
                    opacity: 0.0,
                    duration: 2000
                },
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'left',
            hidden: false,
            description: "Just <b style='color: #cd395b'>seven states</b> have passed over half of the country's restorative justice laws. The <b style='color: #badefc'>bottom half of states</b> have three or less of these laws.",
            location: {
                center: [-98.05708, 38.17605],
                zoom: 4.23,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'updateLegend2',
            onChapterEnter: [
                {
                    layer: 'rj-legislation-8',
                    opacity: 1,
                    duration: 2000
                }
            ],
            onChapterExit: [
                {
                    layer: 'rj-legislation-8',
                    opacity: 0,
                    duration: 2000
                }
            ]
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            description: 'Across the United States, there are <b>27%</b> fewer restorative justice laws for adult offenders than there are for minors.',
            location: {
                center: [-98.05708, 38.17605],
                zoom: 4.23,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'updateLegend3',
            onChapterEnter: [
                {
                    layer: 'rj-organizations',
                    opacity: 0.0,
                    duration: 2000
                },
                {
                    layer: 'rj-legislation-adult',
                    opacity: 1,
                    duration: 2000
                }
            ],
            onChapterExit: [
                {
                    layer: 'rj-legislation-adult',
                    opacity: 0,
                    duration: 2000
                }
            ]
        },
        {
            id: 'fourth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'An Organization for Every Need',
            description: 'Alongside legislation, dozens of private and public organizations <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg"><circle cx="7.5" cy="7.5" r="6.5" fill="#cd395b" stroke="#fff" stroke-width="1" opacity="0.9"/></svg> across the country are practicing restorative justice. From official court programs to informal community groups, these organizations can vary significantly in their exact approach to restorative justice.',
            location: {
                center: [-98.05708, 38.17605],
                zoom: 4.23,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'updateLegend4AndPopup',
            onChapterEnter: [
                {
                    layer: 'rj-organizations',
                    opacity: .8,
                    duration: 2000
                },
                {
                    layer: 'rj-legislation',
                    opacity: 1,
                    duration: 2000
                },
            ],
            onChapterExit: []
        },
        {
            id: 'fifth-identifier',
            alignment: 'right',
            hidden: false,
            // image: './path/to/image/source.png',
            description: 'Vermont has one of the most comprehensive restorative justice systems in the country. The state has passed 18 restorative justice laws and created a robust network of Community Justice Centers throughout the state.',
            location: {
                center: [-72.52382, 43.73300],
                zoom: 8.36,
                pitch: 45.00,
                bearing: -31.64
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'sixth-identifier',
            alignment: 'right',
            hidden: false,
            // image: './path/to/image/source.png',
            description: 'Researchers studying the state&#39;s restorative <a href="https://doc.vermont.gov/sites/correct/files/documents/Restorative_Justice/CJC/CoSA%20in%20Vermont.pdf" target="_blank">CoSA program</a>, Circles of Support and Accountability, found that reconviction rates were <b>11%</b> lower among CoSA participants compared to non-CoSA offenders. The impact was greater for more serious crimes, with felony reconviction rates <b>17%</b> lower for CoSA participants.',
            location: {
                center: [-72.52382, 43.73300],
                zoom: 8.36,
                pitch: 45.00,
                bearing: -31.64
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'seventh-identifier',
            alignment: 'left',
            hidden: false,
            title: 'The Messy Reality',
            description: 'But even in a state like Colorado, which has passed more restorative justice laws than any other state in the country, the reality of implementing a new system is far from perfect.',
            location: {
                center: [-105.54100, 38.64783],
                zoom: 7.03,
                pitch: 45.00,
                bearing: -18.55
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'eighth-identifier',
            alignment: 'left',
            hidden: false,
            // image: './path/to/image/source.png',
            description: '“Colorado state law allows for police officers to make an ad hoc decision in the field essentially as [whether] to refer youth to restorative justice,” González says. “That&#39;s problematic because you can think about coercion, you can think about bias, right. All of the things that exist. And [restorative justice] becomes a co-optation within a state framework that really perpetuates structural discrimination, but with a nicer label to it.”',
            location: {
                center: [-105.54100, 38.64783],
                zoom: 7.03,
                pitch: 45.00,
                bearing: -18.55
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};

var initLoad = true;
var layerTypes = {
    'fill': ['fill-opacity'],
    'line': ['line-opacity'],
    'circle': ['circle-opacity', 'circle-stroke-opacity'],
    'symbol': ['icon-opacity', 'text-opacity'],
    'raster': ['raster-opacity'],
    'fill-extrusion': ['fill-extrusion-opacity'],
    'heatmap': ['heatmap-opacity']
}

var alignments = {
    'left': 'lefty',
    'center': 'centered',
    'right': 'righty',
    'full': 'fully'
}

function getLayerPaintType(layer) {
    var layerType = map.getLayer(layer).type;
    return layerTypes[layerType];
}

function setLayerOpacity(layer) {
    var paintProps = getLayerPaintType(layer.layer);
    paintProps.forEach(function(prop) {
        var options = {};
        if (layer.duration) {
            var transitionProp = prop + "-transition";
            options = { "duration": layer.duration };
            map.setPaintProperty(layer.layer, transitionProp, options);
        }
        map.setPaintProperty(layer.layer, prop, layer.opacity, options);
    });
}

var story = document.getElementById('story');
var features = document.createElement('div');
features.setAttribute('id', 'features');

var header = document.createElement('div');

if (config.title) {
    var titleText = document.createElement('h1');
    titleText.innerText = config.title;
    header.appendChild(titleText);
}

if (config.subtitle) {
    var subtitleText = document.createElement('h2');
    subtitleText.innerText = config.subtitle;
    header.appendChild(subtitleText);
}

if (config.byline) {
    var bylineText = document.createElement('p');
    bylineText.innerText = config.byline;
    header.appendChild(bylineText);
}

if (header.innerText.length > 0) {
    header.classList.add(config.theme);
    header.setAttribute('id', 'header');
    story.appendChild(header);
}

config.chapters.forEach((record, idx) => {
    var container = document.createElement('div');
    var chapter = document.createElement('div');

    if (record.title) {
        var title = document.createElement('h3');
        title.innerText = record.title;
        chapter.appendChild(title);
    }

    if (record.image) {
        var image = new Image();
        image.src = record.image;
        chapter.appendChild(image);
    }

    if (record.description) {
        var story = document.createElement('p');
        story.innerHTML = record.description;
        chapter.appendChild(story);
    }

    container.setAttribute('id', record.id);
    container.classList.add('step');
    if (idx === 0) {
        container.classList.add('active');
    }

    chapter.classList.add(config.theme);
    container.appendChild(chapter);
    container.classList.add(alignments[record.alignment] || 'centered');
    if (record.hidden) {
        container.classList.add('hidden');
    }
    features.appendChild(container);
});

story.appendChild(features);

mapboxgl.accessToken = config.accessToken;

const transformRequest = (url) => {
    const hasQuery = url.indexOf("?") !== -1;
    const suffix = hasQuery ? "&pluginName=scrollytellingV2" : "?pluginName=scrollytellingV2";
    return {
      url: url + suffix
    }
}

var map = new mapboxgl.Map({
    container: 'map',
    style: config.style,
    center: config.chapters[0].location.center,
    zoom: config.chapters[0].location.zoom,
    bearing: config.chapters[0].location.bearing,
    pitch: config.chapters[0].location.pitch,
    interactive: false,
    transformRequest: transformRequest,
    projection: config.projection
});

// Create a inset map if enabled in config.js
if (config.inset) {
 var insetMap = new mapboxgl.Map({
    container: 'mapInset', // container id
    style: 'mapbox://styles/mapbox/dark-v10', //hosted style id
    center: config.chapters[0].location.center,
    // Hardcode above center value if you want insetMap to be static.
    zoom: 3, // starting zoom
    hash: false,
    interactive: false,
    attributionControl: false,
    //Future: Once official mapbox-gl-js has globe view enabled,
    //insetmap can be a globe with the following parameter.
    //projection: 'globe'
  });
}

if (config.showMarkers) {
    var marker = new mapboxgl.Marker({ color: config.markerColor });
    marker.setLngLat(config.chapters[0].location.center).addTo(map);
}

// instantiate the scrollama
var scroller = scrollama();


map.on("load", function() {
    if (config.use3dTerrain) {
        map.addSource('mapbox-dem', {
            'type': 'raster-dem',
            'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
            'tileSize': 512,
            'maxzoom': 14
        });
        // add the DEM source as a terrain layer with exaggerated height
        map.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 1.5 });

        // add a sky layer that will show when the map is highly pitched
        map.addLayer({
            'id': 'sky',
            'type': 'sky',
            'paint': {
                'sky-type': 'atmosphere',
                'sky-atmosphere-sun': [0.0, 0.0],
                'sky-atmosphere-sun-intensity': 15
            }
        });
    };

    // As the map moves, grab and update bounds in inset map.
    if (config.inset) {
    map.on('move', getInsetBounds);
    }
    // setup the instance, pass callback functions
    scroller
    .setup({
        step: '.step',
        offset: 0.7,
        progress: true
    })
    .onStepEnter(async response => {
        var current_chapter = config.chapters.findIndex(chap => chap.id === response.element.id);
        var chapter = config.chapters[current_chapter];
        
        response.element.classList.add('active');
        map[chapter.mapAnimation || 'flyTo'](chapter.location);

        // Incase you do not want to have a dynamic inset map,
        // rather want to keep it a static view but still change the
        // bbox as main map move: comment out the below if section.
        if (config.inset) {
          if (chapter.location.zoom < 5) {
            insetMap.flyTo({center: chapter.location.center, zoom: 0});
          }
          else {
            insetMap.flyTo({center: chapter.location.center, zoom: 3});
          }
        }
        if (config.showMarkers) {
            marker.setLngLat(chapter.location.center);
        }
        if (chapter.onChapterEnter.length > 0) {
            chapter.onChapterEnter.forEach(setLayerOpacity);
        }
        if (chapter.callback) {
            window[chapter.callback]();
        }
        if (chapter.rotateAnimation) {
            map.once('moveend', () => {
                const rotateNumber = map.getBearing();
                map.rotateTo(rotateNumber + 180, {
                    duration: 30000, easing: function (t) {
                        return t;
                    }
                });
            });
        }
        if (config.auto) {
             var next_chapter = (current_chapter + 1) % config.chapters.length;
             map.once('moveend', () => {
                 document.querySelectorAll('[data-scrollama-index="' + next_chapter.toString() + '"]')[0].scrollIntoView();
             });
        }
    })
    .onStepExit(response => {
        var chapter = config.chapters.find(chap => chap.id === response.element.id);
        response.element.classList.remove('active');
        if (chapter.onChapterExit.length > 0) {
            chapter.onChapterExit.forEach(setLayerOpacity);
        }
    });


    if (config.auto) {
        document.querySelectorAll('[data-scrollama-index="0"]')[0].scrollIntoView();
    }
});

//Helper functions for insetmap
function getInsetBounds() {
            let bounds = map.getBounds();

            let boundsJson = {
                "type": "FeatureCollection",
                "features": [{
                    "type": "Feature",
                    "properties": {},
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": [
                            [
                                [
                                    bounds._sw.lng,
                                    bounds._sw.lat
                                ],
                                [
                                    bounds._ne.lng,
                                    bounds._sw.lat
                                ],
                                [
                                    bounds._ne.lng,
                                    bounds._ne.lat
                                ],
                                [
                                    bounds._sw.lng,
                                    bounds._ne.lat
                                ],
                                [
                                    bounds._sw.lng,
                                    bounds._sw.lat
                                ]
                            ]
                        ]
                    }
                }]
            }

            if (initLoad) {
                addInsetLayer(boundsJson);
                initLoad = false;
            } else {
                updateInsetLayer(boundsJson);
            }

        }

function addInsetLayer(bounds) {
    insetMap.addSource('boundsSource', {
        'type': 'geojson',
        'data': bounds
    });

    insetMap.addLayer({
        'id': 'boundsLayer',
        'type': 'fill',
        'source': 'boundsSource', // reference the data source
        'layout': {},
        'paint': {
            'fill-color': '#fff', // blue color fill
            'fill-opacity': 0.2
        }
    });
    // // Add a black outline around the polygon.
    insetMap.addLayer({
        'id': 'outlineLayer',
        'type': 'line',
        'source': 'boundsSource',
        'layout': {},
        'paint': {
            'line-color': '#000',
            'line-width': 1
        }
    });
}

function updateInsetLayer(bounds) {
    insetMap.getSource('boundsSource').setData(bounds);
}



// setup resize event
window.addEventListener('resize', scroller.resize);


// Toggle page header on map view
function toggleHeader () {
const target = document.querySelector('#map');
const headerElement = document.querySelector('.header');
if (!target) {
  console.error('Target element not found');
} else if (!headerElement) {
  console.error('Header element not found');
} else {
  const targetObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log('Target element is in the viewport');
        headerElement.style.transition = 'opacity 1s';
        headerElement.style.opacity = 0;
      } else {
        console.log('Target element is out of the viewport');
        headerElement.style.transition = 'opacity 1s';
        headerElement.style.opacity = 1;
      }
    });
  });
  targetObserver.observe(target);

  const viewportObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.target === document.documentElement) {
        if (entry.isIntersecting) {
          console.log('Viewport intersects with the target element');
          headerElement.style.transition = 'opacity 1s';
          headerElement.style.opacity = 0;
        } else {
          console.log('Viewport no longer intersects with the target element');
          headerElement.style.transition = 'opacity 1s';
          headerElement.style.opacity = 1;
        }
      }
    });
  });
  viewportObserver.observe(document.documentElement);
}};

setTimeout (toggleHeader, 5000);
