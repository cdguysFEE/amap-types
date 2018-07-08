declare namespace AMap {

    export type FeaturesTypes = 'bg' | 'point' | 'road' | 'building'

    export type ZoomType = [number, number]

    export type LngLatLiteral = [number, number]

    export interface PixelLiteral {
        x: number
        y: number
    }

    // event
    export class Event {
        addDomListener(instance, eventName, handler, context): EventListener

        addListener( instance, eventName, handler, context): EventListener

        addListenerOnce( instance, eventName, handler, context): EventListener

        removeListener(eventListener: EventListener): void

        trigger(instance, eventName, extArgs): void
    }

    export interface MouseEvent {
        latLng: LngLat

        pixel: Pixel

        type: string

        target: any
    }

    export class BaseEvent {
        constructor()

        on(eventName, handler, context?): void

        off(eventName, handler, context?): void
    }

    export interface Layer {

    }

    export interface Overlay {

    }

    export interface GeocoderOptions {
        city?: string

        radius?: number

        lang?: string

        batch?: boolean

        extensions?: string
    }

    export class Geocoder {
        constructor(option: GeocoderOptions)

        getLocation(address: string, callback: (status: string, result: any) => {})

        setCity(city: String)

        getAddress(location: LngLat | LngLatLiteral | LngLatLiteral[] | LngLat[],
                   callback: (status: String, result: any) => void)
    }

    export interface View2DOptions {
        center?: LngLat
        rotation?: number
        zoom?: number
        // 地图显示的参考坐标系
        crs?: 'EPSG3857' | 'EPSG3395' | 'EPSG4326'
    }

    export interface TileLayerOptions {
        map?: Map

        tileSize?: number

        tileUrl?: string

        errorUrl?: string

        getTileUrl?: string

        zIndex?: number

        opacity?: number

        zooms?: ZoomType

        detectRetina?: boolean
    }

    export interface MapOptions {
        view?: View2D
        // TODO: 暂时不清楚类型，先填入any，需要完善
        // 地图图层数组，数组可以是图层 中的一个或多个，默认为普通二维地图。
        // 当叠加多个图层时，普通二维地图需通过实例化一个TileLayer类实现
        layers?: Array<any>

        zoom?: number

        center?: LngLat | number[]

        labelzIndex?: number

        zooms?: [number, number]

        lang?: string

        defaultCursor?: string

        // 参见View
        crs?: string

        animateEnable?: Boolean

        isHotspot?: Boolean

        defaultLayer?: TileLayer

        rotateEnable?: Boolean

        resizeEnable?: Boolean

        showIndoorMap?: Boolean

        indoorMap?: IndoorMap

        expandZoomRange?: Boolean

        dragEnable?: Boolean

        zoomEnable?: Boolean

        doubleClickZoom?: Boolean

        keyboardEnable?: Boolean

        jogEnable?: Boolean

        scrollWheel?: Boolean

        touchZoom?: Boolean

        touchZoomCenter?: Number

        mapStyle?: String

        features?: Array<FeaturesTypes>

        showBuildingBlock?: Boolean

        viewMode?: String

        pitch?: Number

        pitchEnable?: Boolean

        buildingAnimation?: Boolean

        skyColor?: String

        preloadMode?: boolean
    }

    export class Pixel {
        constructor(x: number, y: number)

        getX(): number

        getY(): number

        equals(point: Pixel): boolean

        toString(): string
    }

    export class Size {
        constructor(width: number, height: number)

        getWidth(): number

        getHeight(): number

        toString(): string
    }

    export class LngLat {
        constructor(lng: number, lat: number)

        offset(w: Number, s: Number): LngLat

        distance(lnglat: LngLat | Array<LngLat>): number

        getLng(): number

        getLat(): number

        equals(lnglat: LngLat): boolean

        toString(): string
    }

    export class Bounds {
        constructor(southWest: LngLat, northEast: LngLat)
        contains(point: LngLat): boolean

        getCenter(): LngLat

        getSouthWest(): LngLat

        getNorthEast(): LngLat

        toString(): string
    }

    export class View2D {
        constructor(opt: View2DOptions)
    }

    export class ArrayBounds {
        constructor(bounds: Array<LngLat|Pixel>)
    }

    export interface TrafficOptions {
        map?: Map

        zIndex?: Number

        opacity?: number

        zooms?: [number, number]

        detectRetina?: Boolean

        autoRefresh?: Boolean

        interval?: Number

    }

    export namespace TileLayer {
        export class Traffic {
            constructor(option: TrafficOptions )
            setOpacity(alpha: number): void

            show(): void

            hide(): void

            getTiles(): Array<any>

            reload(): void

            setTileUrl(): void

            getZooms(): [number, number]

            setzIndex(index: Number): void

            setMap(map: Map): void
        }
    }

    export class TileLayer {
        constructor(tileOpt: TileLayerOptions)

        setOpacity(alpha: number): void

        show(): void

        hide(): void

        // TODO: 类型待确定
        getTiles(): Array<any>

        reload(): void

        setTileUrl(): void

        getZooms(): ZoomType

        setzIndex(index: number): void

        setMap(map: Map): void
    }

    /**
     *
     * TODO: 内嵌类型待定
     */
    export interface City {
        province?: string
        city?: string
        citycode?: string
        district?: string
    }

    export class Map extends BaseEvent {
        constructor(container: String| HTMLDivElement, opts: MapOptions)

        poiOnAMAP(obj: Object): void

        detailOnAMAP(obj: Object): void

        getZoom(): number

        getLayers(): Array<any> // todo

        getCenter(): LngLat

        getContainer(): HTMLDivElement

        getCity(callback: Function): City

        getBounds(): Bounds

        getLabelzIndex(): Number

        getLimitBounds(): Bounds

        getLang(): String

        getSize(): Size

        getRotation(): Number

        getStatus(): Object

        getDefaultCursor(): String

        getResolution(point: LngLat): Number

        getScale(dpi: Number): Number

        setZoom(level: Number): void

        setlabelzIndex(index: Number): void

        setLayers(layers: Array<Layer>): void

        add(overlayers: Array<Overlay>): void

        remove(overlayers: Array<Overlay>): void

        // TODO: 类型待定
        getAllOverlays(type?: any): Object

        setCenter(position: LngLatLiteral | LngLat): void

        setZoomAndCenter(zoomLevel: Number, center: LngLat): void

        setCity(city: String, callback: Function): void

        setBounds(bound: Bounds): void

        setLimitBounds(bound: Bounds): void

        setLang(lang: String): String

        setRotation(rotation: Number): Number

        setStatus(status: Object): void

        setDefaultCursor(cursor: String): void

        panTo(positon: LngLat): void

        panBy(x: Number, y: Number): void

        setFitView(overlayList: Array<Overlay>): void

        addControl(obj: Object): void

        removeControl(obj: Object): void

        pixelToLngLat(pixel: Pixel, level: Number): LngLat

        lnglatToPixel(lngLat: LngLat, level: Number): Pixel

        containerToLngLat(pixel: Pixel): LngLat

        lngLatToContainer(lnglat: LngLat): Pixel

        setMapStyle(style: String): void

        getMapStyle(): String

        setFeatures(feature: Array<FeaturesTypes>): void

        getFeatures(): Array<FeaturesTypes>

        setDefaultLayer(layer: TileLayer): void

        setPitch(pitch: number): void

        getPitch(): Number

        plugin(plugins: string[], callback: Function)

        destroy(): void

    }



    export interface IconOptions {
        size?: Size

        imageOffset?: Pixel

        image?: string

        imageSize?: Size
    }

    export class Icon {
        constructor(opt: IconOptions)

        etImageSize(): Size

        setImageSize(size: Size): void
    }

    export interface MarkerShapeOptions {
        coords?: number[]

        type?: string
    }

    export class MarkerShape {
        constructor(opt: MarkerShapeOptions)
    }

    export interface IndoorMapOptions {
        zIndex?: number

        opacity?: number

        cursor?: string

        hideFloorBar?: boolean

        alwaysShow?: boolean
    }

    export class IndoorMap {
        constructor(opts: IndoorMapOptions)

        showIndoorMap(indoorid: string, floor: number, shopid: string): void

        showFloor(floor: number, noMove: boolean): void

        setMap(map: Map): void

        show(): void

        hide(): void

        setzIndex(): void

        showFloorBar(): void

        hideFloorBar(): void

        setOpacity(alpha: number): void

        getOpacity(): number

        showLabels(): void

        hideLabels(): void

        getSelectedBuildingId(): string

        /**
         * TODO: 类型待定
         *
         * 获取处于被选中状态的室内地图的一些基本信息，包含名称、当前楼层、所有楼层信息、ID等，结构如：{
         *   id:'xx'//ID
         *   name:'xx'//名称
         *   lnglat://LngLat对象，室内所在位置
         *   floor:0//整数，当前楼层
         *   floor_details:{//所有楼层的信息
         *    floor_indexs:[],//各楼层索引
         *    floor_nonas:[],//各楼层英文
         *    floor_names:[]//各楼层名字
         *   }
         *  }
         */
        getSelectedBuilding(): any
    }

    export interface Building {
        floor?: string

        name?: string

        lnglat?: LngLat

        id?: string
    }

    export interface Shop {
        id?: string

        name?: string

        lnglat?: LngLat

        building_id?: string
    }

    // Marker

    export interface MarkerOptions {
        map?: Map

        offset?: Pixel | PixelLiteral

        position?: LngLat | LngLatLiteral

        icon?: String | Icon

        content?: String | Object

        topWhenClick?: Boolean

        bubble?: Boolean

        draggable?: Boolean

        raiseOnDrag?: Boolean

        cursor?: String

        visible?: Boolean

        zIndex?: Number

        angle?: Number

        autoRotation?: Boolean

        animation?: String

        shadow?: Icon

        title?: String

        clickable?: Boolean

        shape?: MarkerShape

        extData?: any

        // TODO: type
        label?: any

    }

    export class Marker extends BaseEvent {
        constructor(opt: MarkerOptions)

        markOnAMAP(obj: Object): void

        getOffset(): Pixel

        setOffset(offset: Pixel): void

        setAnimation(animate: String): void

        getAnimation(): String

        setClickable(clickable: Boolean): void

        getClickable(): Boolean

        getPosition(): LngLat

        setPosition(lnglat: LngLat | LngLatLiteral): void

        setAngle(angle: Number): void

        setLabel(label: Object): void

        getLabel(): Object

        getAngle(): Number

        setzIndex(index: Number): void

        getzIndex(): Number

        setIcon(content: String | Icon): void

        getIcon(): String | Icon

        setDraggable(draggable: Boolean): void

        getDraggable(): Boolean

        hide(): void

        show(): void

        setCursor(Cursor: string): String

        setContent(html: String | HTMLElement): void

        getContent(): void

        moveAlong(path: LngLat[], speed: Number, f: Function, circlable: Boolean): void

        moveTo(lnglat: LngLat, speed: Number, f: Function): void

        stopMove(): void

        pauseMove(): void

        resumeMove(): void

        setMap(map: Map): void

        getMap(): void

        setTitle(title: String): void

        getTitle(): String

        setTop(isTop: Boolean): void

        getTop(): Boolean

        setShadow(icon: Icon): void

        getShadow(): Icon

        setShape(shape: MarkerShape): void

        getShape(): MarkerShape

        setExtData(ext: any): void

        getExtData(): any
    }

    export interface ElasticMarkerOptions {
        styles?: Array<String>

        zoomStyleMapping?: Object

        map?: Map

        position?: LngLat

        topWhenClick?: Boolean

        bubble?: Boolean

        draggable?: Boolean

        cursor?: String

        visible?: Boolean

        zIndex?: Number

        clickable?: Boolean

        extData?: any

    }

    export class ElasticMarker {
        constructor(opt: ElasticMarkerOptions)

        markOnAMAP(obj: Object): void

        setClickable(clickable: Boolean): void

        getClickable(): Boolean

        getPosition(): LngLat

        setPosition(lnglat: LngLat): void

        setzIndex(index: Number): void

        getzIndex(): Number

        setDraggable(draggable: Boolean): void

        getDraggable(): Boolean

        hide(): void

        show(): void

        setCursor(cursor: string): String

        setMap(map: Map): void

        getMap(): void

        setTitle(title: String): void

        getTitle(): String

        setTop(isTop: Boolean): void

        getTop(): Boolean

        setExtData(ext: any): void

        getExtData(): any

    }

    export interface TextOptions {
        text?: String

        textAlign?: String

        verticalAlign?: String

        map?: Map

        position?: LngLat

        offset?: Pixel

        topWhenClick?: Boolean

        bubble?: Boolean

        draggable?: Boolean

        raiseOnDrag?: Boolean

        cursor?: String

        visible?: Boolean

        zIndex?: Number

        autoRotation?: Boolean

        animation?: String

        shadow?: Icon

        title?: String

        clickable?: Boolean

        extData?: any

    }

    export class Text {
        constructor(opt: TextOptions)

        getText(): String

        setText(text: string): void

        setStyle(styles: Object): void

        markOnAMAP(obj: Object): void

        getOffset(): Pixel

        setOffset(offset: Pixel): void

        setAnimation(animate: String): void

        getAnimation(): String

        setClickable(clickable: Boolean): void

        getClickable(): Boolean

        getPosition(): LngLat

        setPosition(lnglat: LngLat | LngLatLiteral): void

        setAngle(angle: Number): void

        getAngle(): Number

        setzIndex(index: Number): void

        getzIndex(): Number

        setDraggable(draggable: Boolean): void

        getDraggable(): Boolean

        hide(): void

        show(): void

        setCursor(cursor: string): String

        moveAlong(path: LngLat[], speed: Number, f: Function, circlable: Boolean): void

        moveTo(lnglat: LngLat, speed: Number, f: Function): void

        stopMove(): void

        pauseMove(): void

        resumeMove(): void

        setMap(map: Map): void

        getMap(): Map

        setTitle(title: String): void

        getTitle(): String

        setTop(isTop: Boolean): void

        getTop(): Boolean

        setShadow(icon: Icon): void

        getShadow(): Icon

        setExtData(ext: any): void

        getExtData(): any

    }

    // polyline
    export interface PolylineOptions {
        map?: Map

        zIndex?: Number

        bubble?: Boolean

        cursor?: String

        geodesic?: Boolean

        isOutline?: Boolean

        borderWeight?: Number

        outlineColor?: String

        path?: LngLat[] | LngLatLiteral[]

        strokeColor?: String

        strokeOpacity?: Number

        strokeWeight?: Number

        strokeStyle?: String

        strokeDasharray?: Array<number>

        lineJoin?: String

        lineCap?: String

        draggable?: Boolean

        extData?: any

        showDir?: Boolean

    }

    export class Polyline {
        constructor(opt: PolylineOptions)

        setPath(path: LngLat[]): void

        getPath(): LngLat[]

        setOptions(opt: PolylineOptions): void

        getOptions(): Object

        getLength(): Number

        getBounds(): Bounds

        hide(): void

        show(): void

        setMap(map: Map): void

        setExtData(ext: any): void

        getExtData(): any

    }

    // Polygon
    export interface PolygonOptions {
        map?: Map

        zIndex?: Number

        path?: Array<LngLat> | Array<Array<LngLat>>

        bubble?: Boolean

        cursor?: String

        strokeColor?: String

        strokeOpacity?: Number

        strokeWeight?: Number

        fillColor?: String

        fillOpacity?: Number

        draggable?: Boolean

        extData?: any

        strokeStyle?: String

        strokeDasharray?: number[]

    }

    export class Polygon {
        constructor(opt: PolygonOptions)

        setPath(path: Array<LngLat> | Array<Array<LngLat>>): void

        getPath(): Array<LngLat> | Array<Array<LngLat>>

        setOptions(opt: PolygonOptions): void

        getOptions(): object

        getBounds(): Bounds

        getArea(): Number

        hide(): void

        show(): void

        setMap(map: Map): void

        setExtData(ext: any): void

        getExtData(): any

        contains(point: LngLat): Boolean

    }

    export interface BezierCurveOptions {
        path?: Array<number[]>

        map?: AMap.Map

        strokeColor?: String

        strokeOpacity?: Number

        strokeWeight?: Number

        strokeStyle?: String

        strokeDasharray?: Array<number>

        zIndex?: Number

        showDir?: Boolean

        bubble?: Boolean

        cursor?: String

        isOutline?: Boolean

        outlineColor?: String

        borderWeight?: Number

    }

    export class BezierCurve {
        constructor(opt: BezierCurveOptions)

        setPath(path: LngLat[]): void

        getPath(): Array<LngLat>

        setOptions(opt: PolylineOptions): void

        getOptions(): Object

        getLength(): Number

        getBounds(): Bounds

        hide(): void

        show(): void

        setMap(map: Map): void

        setExtData(ext: any): void

        getExtData(): any

    }

    export interface CircleOptions {
        map?: Map

        zIndex?: Number

        center?: LngLat | LngLatLiteral

        bubble?: Boolean

        cursor?: String

        radius?: Number

        strokeColor?: String

        strokeOpacity?: number

        strokeWeight?: Number

        fillColor?: String

        fillOpacity?: number

        strokeStyle?: String

        extData?: any

        strokeDasharray?: number[]

    }

    export class Circle {
        constructor(opt: CircleOptions)

        setCenter(lnglat: LngLat | LngLatLiteral): void

        getCenter(): LngLat

        getBounds(): Bounds

        setRadius(radius: Number): void

        getRadius(): Number

        setOptions(circleopt: CircleOptions): void

        getOptions(): Object

        hide(): void

        show(): void

        setMap(map: Map): void

        setzIndex(index: number): void

        setExtData(ext: any): void

        getExtData(): any

        contains(point: LngLat): Boolean

    }

    export interface CircleMarkerOptions {
        map?: Map

        zIndex?: Number

        center?: LngLat

        bubble?: Boolean

        radius?: Number

        strokeColor?: String

        strokeOpacity?: number

        strokeWeight?: Number

        fillColor?: String

        fillOpacity?: number

        extData?: any

    }

    export class CircleMarker {
        constructor(opt: CircleMarkerOptions)

        setCenter(lnglat: LngLat): void

        getCenter(): LngLat

        setRadius(radius: Number): void

        getRadius(): Number

        setOptions(circleopt: CircleMarkerOptions): void

        getOptions(): Object

        hide(): void

        show(): void

        setMap(map: Map): void

        setExtData(ext: any): void

        getExtData(): any

    }

    export interface EllipseOptions {
        map?: Map

        zIndex?: Number

        center?: LngLat

        radius?: number[]

        bubble?: Boolean

        cursor?: String

        strokeColor?: String

        strokeOpacity?: number

        strokeWeight?: Number

        fillColor?: String

        fillOpacity?: number

        strokeStyle?: String

        extData?: any

        strokeDasharray?: number[]


    }

    export class Ellipse {
        constructor(opt: EllipseOptions)

        getCenter(): LngLat

        setCenter(lnglat: LngLat): void

        getBounds(): Bounds

        setOptions(ellipseOpt: EllipseOptions): void

        getOptions(): Object

        hide(): void

        show(): void

        setMap(map: Map): void

        setExtData(ext: any): void

        getExtData(): any

        contains(point: LngLat): Boolean

    }

    export interface InfoWindowOptions {
        isCustom?: boolean

        autoMove?: boolean

        closeWhenClickMap?: boolean

        content: string | HTMLElement

        size?: Size

        offset?: Pixel | PixelLiteral

        position?: LngLatLiteral | LngLat

        showShadow?: boolean
    }

    export class InfoWindow extends BaseEvent {
        constructor(option: InfoWindowOptions)

        open(map: Map, pos: LngLat | LngLatLiteral): void

        close(): void

        getIsOpen(): void

        setContent(content: String | HTMLElement): void

        getContent(): string

        setPosition(lnglat: LngLat | LngLatLiteral): void

        getPosition(): LngLat

        setSize(size: Size): void

        getSize(): Size

        setOffset(offset: Pixel): void
    }

    export class CircleEditor extends BaseEvent {
        constructor(map: Map, circle: Circle)

        open(): void

        close(): void
    }

    export class MouseTool extends BaseEvent {
        constructor(map: Map)

        marker(options: MarkerOptions): void

        polyline(options: PolylineOptions): void

        polygon(options: PolygonOptions): void

        circle(options: CircleOptions): void

        rule(options: CircleOptions): void

        rectangle(options: PolygonOptions): void

        measureArea(options: PolygonOptions): void

        rectZoomIn(options: PolygonOptions): void

        rectZoomOut(options: PolygonOptions): void

        close(isClean?: boolean): void
    }

    export interface MarkerClustererOptions {
        gridSize?: number
        minClusterSize?: number
        maxZoom?: number
        averageCenter?: boolean
        styles?: Object[]
        renderCluserMarker?: Function
        zoomOnClick?: boolean
    }

    export class MarkerClusterer extends BaseEvent {
        constructor(map: Map, markers: Marker[], options: MarkerClustererOptions)

        addMarker(marker: Marker): void

        removeMarker(marker: Marker): void

        getClustersCount(): Number

        getGridSize(): Number

        getMaxZoom(): Number

        getMinClusterSize(): Number

        getStyles(): Array<Object>

        setGridSize(size: Number): void

        setMaxZoom(zoom: Number): void

        setMinClusterSize(size: Number): void

        setStyles(styles: Object[]): void

        clearMarkers(): void

        setMap(map: Map): void

        setMarkers(markers: Array<Marker>): void

        getMap(): Map

        getMarkers(): Array<Marker>

        addMarkers(markers: Array<Marker>): void

        removeMarkers(markers: Array<Marker>): void

        isAverageCenter(): Boolean

        setAverageCenter(averageCenter: Boolean): void

    }

    export class GeometryUtil {
        static distance(p1: LngLat, p2: LngLat): number

        static ringArea(ring: [LngLat]): Number

        static isClockwise(ring: [LngLat]): Boolean

        static distanceOfLine(ring: [LngLat]): Number

        static ringRingClip(ring1: [LngLat], ring2: [LngLat]): Number

        static doesRingRingIntersect(ring1: [LngLat], ring2: [LngLat]): Boolean

        static doesLineRingIntersect(line: [LngLat], ring: [LngLat]): Boolean

        static doesLineLineIntersect(line1: [LngLat], line2: [LngLat]): Boolean

        static doesSegmentPolygonIntersect(p1: LngLat, p2: LngLat, rings: [LngLat[]]): Boolean

        static doesSegmentRingIntersect(p1: LngLat, p2: LngLat, ring: [LngLat]): Boolean

        static doesSegmentLineIntersect(p1: LngLat, p2: LngLat, line: [LngLat]): Boolean

        static doesSegmentsIntersect(p1: LngLat, p2: LngLat, p3: LngLat, p4: LngLat): Boolean

        static isPointInRing(p: LngLat, ring: [LngLat]): Boolean

        static isRingInRing(ring1: [LngLat], ring2: [LngLat]): Boolean

        static isPointInPolygon(p: LngLat, rings: [LngLat[]]): Boolean

        static makesureClockwise(ring: [LngLat]): Boolean

        static makesureAntiClockwise(ring: [LngLat]): Boolean

        static closestOnSegment(p1: LngLat, p2: LngLat, p3: LngLat): LngLat

        static closestOnLine(p: LngLat, line: [LngLat]): LngLat

        static distanceToSegment(p1: LngLat, p2: LngLat, p3: LngLat): Number

        static distanceToLine(p: LngLat, line: [LngLat]): Number

        static isPointOnSegment(p1: LngLat, p2: LngLat, p3: LngLat, tolerance: Number): Boolean

        static isPointOnLine(p: LngLat, line: [LngLat], tolerance: Number): Boolean

        static isPointOnRing(p: LngLat, ring: [LngLat], tolerance: Number): Boolean

        static isPointOnPolygon(p: LngLat, rings: [LngLat[]], tolerance: Number): Boolean
    }
}
