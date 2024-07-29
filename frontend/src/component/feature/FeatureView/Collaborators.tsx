import { styled } from '@mui/material';
import { GroupCardAvatars } from 'component/admin/groups/GroupsList/GroupCard/GroupCardAvatars/NewGroupCardAvatars';
import { HtmlTooltip } from 'component/common/HtmlTooltip/HtmlTooltip';
import { UserAvatar } from 'component/common/UserAvatar/UserAvatar';
import type { Collaborator } from 'interfaces/featureToggle';
import type { FC } from 'react';
import { Link } from 'react-router-dom';

const StyledAvatar = styled(UserAvatar)(({ theme }) => ({
    width: theme.spacing(3),
    height: theme.spacing(3),
}));

const SectionContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    flexFlow: 'row',
    gap: theme.spacing(0.5),
    alignItems: 'flex-start',
    height: 'min-content',
}));

const LastModifiedByAvatarAndLink = styled('div')(({ theme }) => ({
    display: 'flex',
    flexFlow: 'column',
    gap: theme.spacing(1),
}));

const LastModifiedBy: FC<Collaborator> = ({ id, name, imageUrl }) => {
    return (
        <SectionContainer>
            <span>Last modified by</span>
            <LastModifiedByAvatarAndLink>
                <HtmlTooltip arrow describeChild title={name}>
                    <span>
                        <StyledAvatar user={{ id, name, imageUrl }} hideTitle />
                    </span>
                </HtmlTooltip>
                <Link to='logs'>view change</Link>
            </LastModifiedByAvatarAndLink>
        </SectionContainer>
    );
};

const CollaboratorList: FC<{ collaborators: Collaborator[] }> = ({
    collaborators,
}) => {
    return (
        <SectionContainer>
            <span className='description'>Collaborators</span>
            <GroupCardAvatars
                users={collaborators}
                avatarLimit={8}
                AvatarComponent={StyledAvatar}
            />
        </SectionContainer>
    );
};

const Container = styled('article')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    gap: theme.spacing(10),
    alignItems: 'center',
    justifyContent: 'space-between',
    [theme.breakpoints.down('xl')]: {
        display: 'none',
    },
}));

type Props = {
    collaborators: Collaborator[] | undefined;
};

export const Collaborators: FC<Props> = ({ collaborators }) => {
    if (!collaborators || collaborators.length === 0) {
        return null;
    }

    const lastModifiedBy = collaborators[0];

    return (
        <Container>
            <LastModifiedBy {...lastModifiedBy} />
            <CollaboratorList collaborators={collaborators} />
        </Container>
    );
};
