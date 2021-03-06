export default class Tree {
    constructor(selector: any, ops: any);
    $el: HTMLElement;
    _data: any;
    nodes: any[];
    itemHeight: any;
    showCount: any;
    maxHeight: any;
    dataKey: any;
    data: any[];
    keyword: string;
    searchFilter: any;
    ready: any;
    $$breadcrumb: Breadcrumb | undefined;
    store: TreeStore;
    _init(): void;
    vlist: Vlist | undefined;
    _render(update?: boolean): void;
    _hasKeyword(v: any): any;
    _checkFilter(v: any): any;
    filter(keyword: string | undefined, onlySearchLeaf: any): any[];
    getNodeById(id: any): any;
    getCheckedNodes(): any[];
    setMaxValue(value?: number): void;
    scrollToIndex(index?: number): void;
}
import Breadcrumb from "../breadcrumb";
import TreeStore from "./store";
import Vlist from "../virtual-list";
