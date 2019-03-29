/**
 * @file description
 * @author email
 */

export const API_SYSTEM = [
    {
        name: 'getPlanTypeList',
        method: 'post',
        url: 'api/trunk/dawn/plan/getallplantypeinfo'
    },
    {
        name: 'getElementTypeList',
        method: 'post',
        url: 'api/trunk/dawn/material/getallelement'
    },
    {
        name: 'getMaterialTypeList',
        url: 'api/trunk/dawn/material/getmaterialtype?auto_alloc=1'
    }
];
