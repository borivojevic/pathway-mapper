import React from 'react';
import { EModalType, IColorValueMap, IProfileMetaData } from './react-pathway-mapper';
declare type PathwayMapperType = {
    isCollaborative: boolean;
    isCbioPortal: boolean;
    editorHandler: Function;
    selectedPathway: string;
    setActiveEdge: Function;
    profiles: IProfileMetaData[];
    pathwayHandler: (pathwayName: string) => void;
    handleOpen: (modalId: EModalType) => void;
    onPathwayChangeCompleted: () => void;
    genomicDataOverlayColorScheme: IColorValueMap;
    colorSchemeChangeCallback: (IColorValueMap: any) => void;
};
export default class CytoscapeArea extends React.Component<PathwayMapperType, {}> {
    private cy;
    private cyDiv;
    private editor;
    private edgeAddingMode;
    private viewOperationsManager;
    private qtipManager;
    private genomicDataExplorerView;
    private pathwayDetailsView;
    private viewUtilities;
    private isCollaborative;
    private isCbioPortal;
    private shareDBManager;
    private cxtMenuManager;
    private dragDropNodeAddManager;
    private undoRedoManager;
    private portalAccessor;
    private isMountedFirst;
    private eh;
    private lastSelectedEdge;
    constructor(props: PathwayMapperType);
    componentWillUpdate(nextProps: PathwayMapperType): void;
    componentDidUpdate(prevProps: PathwayMapperType): void;
    getPathway(selectedPathway: string): void;
    render(): JSX.Element;
    componentDidMount(): void;
    cyDivHandler(div: HTMLDivElement): void;
    init(): void;
    placePanzoomAndOverlay(): void;
    getPathwayData(): any;
    initCyJS(): void;
    getGlobalEdgeType(): string;
    initCyHandlers(): void;
    initKeyboardHandlers(): void;
    initUndoRedoFunctionality(): void;
    initCBioPortalFunctionalities(): void;
}
export {};
