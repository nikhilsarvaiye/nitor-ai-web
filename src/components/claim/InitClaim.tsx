import { ClaimService } from '@components/claim/claim.service';
import { ClaimStore } from '@components/claim/claim.store';

export const claimService = new ClaimService();
export const claimStore = new ClaimStore(claimService);
export const claimFilterStore = new ClaimStore(claimService);
